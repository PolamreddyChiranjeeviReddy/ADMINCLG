"use strict";
// import mongoose, { Schema, Document } from 'mongoose';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// interface FacultyMember {
//   sno: number;
//   name: string;
//   designation: string;
// }
// export interface DepartmentDocument extends Document {
//   code: string; // like 'cse', 'ece', etc.
//   name: string;
//   heroImage: string;
//   about: string;
//   hodMessage: string;
//   hodName: string;
//   hodImage: string;
//   vision: string;
//   mission: string[];
//   faculty: FacultyMember[];
// }
// const FacultySchema: Schema = new Schema({
//   sno: { type: Number, required: true },
//   name: { type: String, required: true },
//   designation: { type: String, required: true }
// });
// const DepartmentSchema: Schema = new Schema({
//   code: { type: String, required: true, unique: true }, // e.g., 'cse', 'ece'
//   name: { type: String, required: true },
//   heroImage: { type: String, required: true },
//   about: { type: String, required: true },
//   hodMessage: { type: String, required: true },
//   hodName: { type: String, required: true },
//   hodImage: { type: String, required: true },
//   vision: { type: String, required: true },
//   mission: { type: [String], required: true },
//   faculty: { type: [FacultySchema], required: true }
// });
// const departmentModel = (mongoose.models.department as mongoose.Model<DepartmentDocument>) 
//   || mongoose.model<DepartmentDocument>("department", DepartmentSchema);
// export default departmentModel;
const mongoose_1 = __importStar(require("mongoose"));
const FacultySchema = new mongoose_1.Schema({
    sno: { type: Number, required: true },
    name: { type: String, required: true },
    designation: { type: String, required: true }
});
const DepartmentSchema = new mongoose_1.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    heroImage: { type: String, required: true },
    about: { type: String, required: true },
    hodMessage: { type: String, required: true },
    hodName: { type: String, required: true },
    hodImage: { type: String, required: true },
    vision: { type: String, required: true },
    mission: { type: [String], required: true },
    faculty: { type: [FacultySchema], required: true }
});
const departmentModel = mongoose_1.default.models.department || mongoose_1.default.model("department", DepartmentSchema);
exports.default = departmentModel;
//# sourceMappingURL=departmentModel.js.map