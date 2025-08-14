import mongoose, { Document } from "mongoose";
export interface IOtp extends Document {
    email: string;
    otpHash: string;
    purpose: string;
    used: boolean;
    expiresAt: Date;
}
declare const Otp: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    otpHash: string;
    purpose: "RESET_PASSWORD";
    used: boolean;
    expiresAt: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    otpHash: string;
    purpose: "RESET_PASSWORD";
    used: boolean;
    expiresAt: NativeDate;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    otpHash: string;
    purpose: "RESET_PASSWORD";
    used: boolean;
    expiresAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    otpHash: string;
    purpose: "RESET_PASSWORD";
    used: boolean;
    expiresAt: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    otpHash: string;
    purpose: "RESET_PASSWORD";
    used: boolean;
    expiresAt: NativeDate;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    otpHash: string;
    purpose: "RESET_PASSWORD";
    used: boolean;
    expiresAt: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Otp;
//# sourceMappingURL=otpModel.d.ts.map