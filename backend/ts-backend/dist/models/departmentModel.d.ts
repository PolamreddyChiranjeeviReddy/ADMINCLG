import mongoose, { Document } from 'mongoose';
interface FacultyMember {
    sno: number;
    name: string;
    designation: string;
}
export interface DepartmentDocument extends Document {
    code: string;
    name: string;
    heroImage: string;
    about: string;
    hodMessage: string;
    hodName: string;
    hodImage: string;
    vision: string;
    mission: string[];
    faculty: FacultyMember[];
}
declare const departmentModel: mongoose.Model<any, {}, {}, {}, any, any>;
export default departmentModel;
//# sourceMappingURL=departmentModel.d.ts.map