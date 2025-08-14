import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { Request, Response } from "express";
import userModel from "../models/userModel";
import Otp from "../models/otpModel";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // app password (NOT your gmail password)
  },
});

export async function sendOtpEmail(toEmail:string, otp:string) {
  const mailOptions = {
    from: `"${process.env.MAIL_FROM_NAME || "My App"}" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    html: `
      <div style="font-family:system-ui,Segoe UI,Arial">
        <h2>Your OTP Code</h2>
        <p style="font-size:16px">Use the following code to proceed:</p>
        <p style="font-size:24px;font-weight:700;letter-spacing:6px">${otp}</p>
        <p style="color:#666">This code expires in 5 minutes.</p>
      </div>
    `,
  };
  await transporter.sendMail(mailOptions);
}


// Helper: Create JWT token
const createToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "default_secret_key",{
    expiresIn: "7d"
  });
};

function generateOTP(length = 6) {
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}

// Register User
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    const token = createToken(savedUser._id.toString());
    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login User
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id.toString());
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const seedAdmin = async (req: Request, res: Response) => {
  try {
    const { email = "admin@example.com", password = "admin123", name = "Admin" } = req.body || {};
    let user = await userModel.findOne({ email });
    if (!user) {
      user = new userModel({ email, name, passwordHash: "" });
      await user.setPassword(password);
      await user.save();
    }
    res.json({ message: "Admin ensured", email, password });
  } catch (e:unknown) {
    const error = e as Error;
    res.status(500).json({ message: error.message });
  }
};


// Send OTP (for password reset)
export const sendOtp= async (req:Request, res:Response) => {
  try {
    const { email } = req.body || {};
    console.log(email);
    if (!email) return res.status(400).json({ message: "Email is required" });

    // Make sure user exists (optional: allow for sign-up flow too)
    console.log("hello");
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Generate & hash OTP
    const otp = generateOTP(6);
    const otpHash = await bcrypt.hash(otp, 10);

    // Save OTP doc (invalidate older ones of same purpose)
    await Otp.updateMany({ email, purpose: "RESET_PASSWORD", used: false }, { $set: { used: true } });
    await Otp.create({
      email,
      otpHash,
      purpose: "RESET_PASSWORD",
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
    });
        // Send email
        console.log("otp created")
        console.log(email, otp);
        await sendOtpEmail(email, otp);
        console.log("otp send");
        res.json({ message: "OTP sent" });
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to send OTP" });
      }
    };

// Verify OTP (step 2)
export const verifyOtp = async (req:Request , res:Response) => {
  try {
    const { email, otp } = req.body || {};
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });

    const otpDoc = await Otp.findOne({ email, purpose: "RESET_PASSWORD", used: false }).sort({ createdAt: -1 });
    if (!otpDoc) return res.status(400).json({ message: "No active OTP. Please request again." });

    if (otpDoc.expiresAt < new Date()) return res.status(400).json({ message: "OTP expired" });

    const ok = await bcrypt.compare(otp, otpDoc.otpHash);
    if (!ok) return res.status(400).json({ message: "Invalid OTP" });

    // Mark as used AFTER verification; for reset we also verify again in reset step, or attach a short-lived token
    otpDoc.used = true;
    await otpDoc.save();

    // Issue a short-lived token for the next step (reset)
    // (Alternatively skip this and re-check OTP again during reset)
    const shortToken = createToken(otpDoc._id.toString());
    res.json({ message: "OTP verified", token: shortToken });
  } catch (e:unknown) {
    const error = e as Error;
    res.status(500).json({ message: error.message });
  }
};


// Reset password (final step)
export const resetPassword = async (req:Request, res:Response) => {
  try {
    const { email, otp, newPassword } = req.body || {};
    if (!email || !otp || !newPassword) {
      return res.status(400).json({ message: "Email, OTP, and newPassword are required" });
    }

    // Re-validate OTP (safer if user skipped /verify-otp)
    const otpDoc = await Otp.findOne({ email, purpose: "RESET_PASSWORD", used: false }).sort({ createdAt: -1 });
    if (!otpDoc) return res.status(400).json({ message: "No active OTP. Please request again." });
    if (otpDoc.expiresAt < new Date()) return res.status(400).json({ message: "OTP expired" });

    const ok = await bcrypt.compare(otp, otpDoc.otpHash);
    if (!ok) return res.status(400).json({ message: "Invalid OTP" });

    // Update password
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    await user.setPassword(newPassword);
    await user.save();

    // Mark OTP used
    otpDoc.used = true;
    await otpDoc.save();

    res.json({ message: "Password reset successful" });
  } catch (e:unknown) {
    const error = e as Error;
    res.status(500).json({ message: error.message });
  }
};


