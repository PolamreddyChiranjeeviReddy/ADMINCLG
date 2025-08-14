"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PlacementSchema = new mongoose_1.default.Schema({
    student: { type: String, required: true },
    company: { type: String, required: true },
    package: { type: String, required: true },
    image: { type: String, required: true }, // Uploaded student image
    companyLogo: { type: String, required: true }, // Uploaded company logo
}, { timestamps: true });
const placementModel = mongoose_1.default.models.Placement || mongoose_1.default.model('Placement', PlacementSchema);
exports.default = placementModel;
//# sourceMappingURL=placementModel.js.map