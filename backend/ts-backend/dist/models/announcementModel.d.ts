import mongoose, { Document } from "mongoose";
export interface IAnnouncement extends Document {
    date: string;
    title: string;
    description: string;
    path: string;
}
declare const announcementModel: mongoose.Model<any, {}, {}, {}, any, any>;
export default announcementModel;
//# sourceMappingURL=announcementModel.d.ts.map