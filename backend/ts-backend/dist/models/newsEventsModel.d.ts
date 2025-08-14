import mongoose from 'mongoose';
export interface INewsEvent extends mongoose.Document {
    type: string;
    title: string;
    date: string;
    description: string;
    pathlink: string;
    image: string;
    bgColor: string;
}
declare const newEventsModel: mongoose.Model<any, {}, {}, {}, any, any>;
export default newEventsModel;
//# sourceMappingURL=newsEventsModel.d.ts.map