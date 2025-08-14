"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
userRouter.post("/register", userController_1.registerUser);
userRouter.post("/login", userController_1.loginUser);
userRouter.post("/send-otp", userController_1.sendOtp);
userRouter.post("/verify-otp", userController_1.verifyOtp);
userRouter.post("/reset-password", userController_1.resetPassword);
exports.default = userRouter;
// import express from "express";
// import bcrypt from "bcrypt";
// import User from "../models/User.js";
// import Otp from "../models/Otp.js";
// import { sendOtpEmail } from "../utils/mailer.js";
// import { signToken } from "../middleware/auth.js";
// const router = express.Router();
// // Helper: generate numeric OTP
// function generateOTP(length = 6) {
//   const min = 10 ** (length - 1);
//   const max = 10 ** length - 1;
//   return String(Math.floor(Math.random() * (max - min + 1)) + min);
// }
// // Seed: create an admin user if not exists (for quick testing)
// router.post("/seed-admin", async (req, res) => {
//   try {
//     const { email = "admin@example.com", password = "admin123", name = "Admin" } = req.body || {};
//     let user = await User.findOne({ email });
//     if (!user) {
//       user = new User({ email, name, passwordHash: "" });
//       await user.setPassword(password);
//       await user.save();
//     }
//     res.json({ message: "Admin ensured", email, password });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });
// // Login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body || {};
//     if (!email || !password) return res.status(400).json({ message: "Email and password required" });
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: "Invalid credentials" });
//     const ok = await user.comparePassword(password);
//     if (!ok) return res.status(401).json({ message: "Invalid credentials" });
//     const token = signToken({ _id: user._id, email: user.email });
//     res.json({ token, user: { email: user.email, name: user.name } });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });
// // Send OTP (for password reset)
// router.post("/send-otp", async (req, res) => {
//   try {
//     const { email } = req.body || {};
//     if (!email) return res.status(400).json({ message: "Email is required" });
//     // Make sure user exists (optional: allow for sign-up flow too)
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });
//     // Generate & hash OTP
//     const otp = generateOTP(6);
//     const otpHash = await bcrypt.hash(otp, 10);
//     // Save OTP doc (invalidate older ones of same purpose)
//     await Otp.updateMany({ email, purpose: "RESET_PASSWORD", used: false }, { $set: { used: true } });
//     await Otp.create({
//       email,
//       otpHash,
//       purpose: "RESET_PASSWORD",
//       expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
//     });
//     // Send email
//     await sendOtpEmail(email, otp);
//     res.json({ message: "OTP sent" });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ message: "Failed to send OTP" });
//   }
// });
// // Verify OTP (step 2)
// router.post("/verify-otp", async (req, res) => {
//   try {
//     const { email, otp } = req.body || {};
//     if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });
//     const otpDoc = await Otp.findOne({ email, purpose: "RESET_PASSWORD", used: false }).sort({ createdAt: -1 });
//     if (!otpDoc) return res.status(400).json({ message: "No active OTP. Please request again." });
//     if (otpDoc.expiresAt < new Date()) return res.status(400).json({ message: "OTP expired" });
//     const ok = await bcrypt.compare(otp, otpDoc.otpHash);
//     if (!ok) return res.status(400).json({ message: "Invalid OTP" });
//     // Mark as used AFTER verification; for reset we also verify again in reset step, or attach a short-lived token
//     otpDoc.used = true;
//     await otpDoc.save();
//     // Issue a short-lived token for the next step (reset)
//     // (Alternatively skip this and re-check OTP again during reset)
//     const shortToken = signToken({ email, purpose: "RESET_PASSWORD" });
//     res.json({ message: "OTP verified", token: shortToken });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });
// // Reset password (final step)
// router.post("/reset-password", async (req, res) => {
//   try {
//     const { email, otp, newPassword } = req.body || {};
//     if (!email || !otp || !newPassword) {
//       return res.status(400).json({ message: "Email, OTP, and newPassword are required" });
//     }
//     // Re-validate OTP (safer if user skipped /verify-otp)
//     const otpDoc = await Otp.findOne({ email, purpose: "RESET_PASSWORD", used: false }).sort({ createdAt: -1 });
//     if (!otpDoc) return res.status(400).json({ message: "No active OTP. Please request again." });
//     if (otpDoc.expiresAt < new Date()) return res.status(400).json({ message: "OTP expired" });
//     const ok = await bcrypt.compare(otp, otpDoc.otpHash);
//     if (!ok) return res.status(400).json({ message: "Invalid OTP" });
//     // Update password
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });
//     await user.setPassword(newPassword);
//     await user.save();
//     // Mark OTP used
//     otpDoc.used = true;
//     await otpDoc.save();
//     res.json({ message: "Password reset successful" });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });
// export default router;
//# sourceMappingURL=userRoute.js.map