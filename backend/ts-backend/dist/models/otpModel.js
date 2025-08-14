"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const otpSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, index: true, lowercase: true, trim: true },
    otpHash: { type: String, required: true },
    purpose: { type: String, enum: ["RESET_PASSWORD"], default: "RESET_PASSWORD" },
    used: { type: Boolean, default: false },
    expiresAt: { type: Date, required: true, index: { expires: 0 } }, // TTL via code below
}, { timestamps: true });
// TTL index (expire docs automatically after expiresAt)
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
const Otp = mongoose_1.default.model("Otp", otpSchema);
// const otpModel = mongoose.models.Otp || mongoose.model<IOtp>("Otp", otpSchema);
// export default otpModel;
exports.default = Otp;
//# sourceMappingURL=otpModel.js.map