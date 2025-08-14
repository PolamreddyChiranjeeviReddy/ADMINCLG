import mongoose, { Document, Schema } from "mongoose";

export interface IOtp extends Document {
        email: string;
        otpHash: string;
        purpose: string;
        used: boolean;
        expiresAt: Date;
}

const otpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: true, lowercase: true, trim: true },
    otpHash: { type: String, required: true },
    purpose: { type: String, enum: ["RESET_PASSWORD"], default: "RESET_PASSWORD" },
    used: { type: Boolean, default: false },
    expiresAt: { type: Date, required: true, index: { expires: 0 } }, // TTL via code below
  },
  { timestamps: true }
);

// TTL index (expire docs automatically after expiresAt)
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Otp = mongoose.model("Otp", otpSchema);
// const otpModel = mongoose.models.Otp || mongoose.model<IOtp>("Otp", otpSchema);
// export default otpModel;

export default Otp;
