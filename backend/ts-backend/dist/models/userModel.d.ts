import mongoose, { Document } from "mongoose";
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}
declare const userModel: mongoose.Model<any, {}, {}, {}, any, any>;
export default userModel;
//# sourceMappingURL=userModel.d.ts.map