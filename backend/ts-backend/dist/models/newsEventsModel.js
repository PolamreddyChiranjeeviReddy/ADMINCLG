"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const NewsEventSchema = new mongoose_1.default.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    pathlink: { type: String, required: true },
    image: { type: String, required: true },
    bgColor: { type: String, required: true }
}, { timestamps: true });
// export default mongoose.model<INewsEvent>('NewsEvent', NewsEventSchema);
const newEventsModel = mongoose_1.default.models.NewsEvent || mongoose_1.default.model("NewsEvent", NewsEventSchema);
exports.default = newEventsModel;
//# sourceMappingURL=newsEventsModel.js.map