"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AnnouncementSchema = new mongoose_1.default.Schema({
    date: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    path: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });
// export default mongoose.model<IAnnouncement>("Announcement", AnnouncementSchema);
const announcementModel = mongoose_1.default.models.Announcement || mongoose_1.default.model("Announcement", AnnouncementSchema);
exports.default = announcementModel;
//# sourceMappingURL=announcementModel.js.map