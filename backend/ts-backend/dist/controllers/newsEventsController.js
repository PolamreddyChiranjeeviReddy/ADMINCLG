"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.getAllEvents = exports.createEvent = void 0;
const newsEventsModel_1 = __importDefault(require("../models/newsEventsModel"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createEvent = async (req, res) => {
    try {
        const { type, title, date, description, pathlink, bgColor } = req.body;
        const image = req.file?.filename;
        const newEvent = await newsEventsModel_1.default.create({
            type,
            title,
            date,
            description,
            pathlink,
            bgColor,
            image
        });
        res.status(201).json(newEvent);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.createEvent = createEvent;
const getAllEvents = async (_req, res) => {
    try {
        const events = await newsEventsModel_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(events);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.getAllEvents = getAllEvents;
const updateEvent = async (req, res) => {
    try {
        const { _id } = req.params;
        const { type, title, date, description, pathlink, bgColor } = req.body;
        const newsEvents = await newsEventsModel_1.default.findById(_id);
        if (!newsEvents) {
            return res.status(404).json({ error: 'News Event not found' });
        }
        // Update text fields
        newsEvents.title = title || newsEvents.title;
        newsEvents.date = date || newsEvents.date;
        newsEvents.type = type || newsEvents.type;
        newsEvents.description = description || newsEvents.description;
        newsEvents.pathlink = pathlink || newsEvents.pathlink;
        newsEvents.bgColor = bgColor || newsEvents.bgColor;
        // If new image is uploaded, delete old one
        if (req.file && req.file.filename) {
            const oldImagePath = path_1.default.join(__dirname, '..', 'uploads', newsEvents.image);
            console.log("Old image path:", oldImagePath);
            if (newsEvents.image && fs_1.default.existsSync(oldImagePath)) {
                fs_1.default.unlinkSync(oldImagePath);
                console.log("Old image deleted successfully");
            }
            else {
                console.log("Old image does not exist or path incorrect");
            }
            newsEvents.image = req.file.filename;
        }
        const updated = await newsEvents.save();
        res.status(200).json(updated);
    }
    catch (err) {
        // console.error('Update error:', err);
        const error = err;
        res.status(500).json({ error: error.message || 'Something went wrong while updating' });
    }
};
exports.updateEvent = updateEvent;
const deleteEvent = async (req, res) => {
    try {
        const { _id } = req.params;
        const event = await newsEventsModel_1.default.findOne({ _id });
        if (!event)
            return res.status(404).json({ message: 'Event not found' });
        // Delete image from disk
        const imagePath = path_1.default.join(__dirname, '..', 'uploads', event.image);
        if (fs_1.default.existsSync(imagePath))
            fs_1.default.unlinkSync(imagePath);
        await event.deleteOne();
        res.status(200).json({ message: 'Event deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.deleteEvent = deleteEvent;
//# sourceMappingURL=newsEventsController.js.map