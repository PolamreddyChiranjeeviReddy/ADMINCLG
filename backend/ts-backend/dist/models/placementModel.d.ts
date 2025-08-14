import mongoose from 'mongoose';
export interface IPlacement extends mongoose.Document {
    student: string;
    company: string;
    package: string;
    image: string;
    companyLogo: string;
}
declare const placementModel: mongoose.Model<any, {}, {}, {}, any, any>;
export default placementModel;
//# sourceMappingURL=placementModel.d.ts.map