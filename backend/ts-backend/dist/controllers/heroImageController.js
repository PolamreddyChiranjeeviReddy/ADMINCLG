"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHeroImage = exports.updateHeroImage = exports.getHeroImages = exports.createHeroImage = void 0;
const heroImageModel_1 = __importDefault(require("../models/heroImageModel"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Add new hero image
const createHeroImage = async (req, res) => {
    try {
        const { title } = req.body;
        // const desktopImage = req.files?.desktopImage?.[0]?.filename;
        // const mobileImage = req.files?.mobileImage?.[0]?.filename;
        const desktopImage = req.files && 'desktopImage' in req.files ? req.files['desktopImage'][0].filename : undefined;
        const mobileImage = req.files && 'mobileImage' in req.files ? req.files['mobileImage'][0].filename : undefined;
        if (!desktopImage || !mobileImage) {
            return res.status(400).json({ message: "Both images are required." });
        }
        const newImage = new heroImageModel_1.default({ title, desktopImage, mobileImage });
        await newImage.save();
        res.status(201).json(newImage);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Something went wrong' });
    }
};
exports.createHeroImage = createHeroImage;
// Get all hero images
const getHeroImages = async (_req, res) => {
    try {
        const images = await heroImageModel_1.default.find();
        res.json(images);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch hero images" });
    }
};
exports.getHeroImages = getHeroImages;
const updateHeroImage = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title } = req.body;
        // const desktopImage = req.files?.desktopImage?.[0]?.filename;
        // const mobileImage = req.files?.mobileImage?.[0]?.filename;
        const desktopImage = req.files && 'desktopImage' in req.files ? req.files['desktopImage'][0].filename : undefined;
        const mobileImage = req.files && 'mobileImage' in req.files ? req.files['mobileImage'][0].filename : undefined;
        const heroImage = await heroImageModel_1.default.findOne({ _id });
        if (!heroImage) {
            return res.status(404).json({ error: 'Hero Image not found' });
        }
        heroImage.title = title || heroImage.title;
        // Replace images if uploaded
        if (req.files?.desktopImage) {
            const heroPath = path_1.default.join(__dirname, '..', 'uploads', heroImage.desktopImage);
            if (heroImage.desktopImage && fs_1.default.existsSync(heroPath)) {
                fs_1.default.unlinkSync(heroPath);
            }
            heroImage.desktopImage = desktopImage;
        }
        if (req.files?.mobileImage) {
            const hodPath = path_1.default.join(__dirname, '..', 'uploads', heroImage.mobileImage);
            if (heroImage.mobileImage && fs_1.default.existsSync(hodPath)) {
                fs_1.default.unlinkSync(hodPath);
            }
            heroImage.mobileImage = mobileImage;
        }
        const updated = await heroImage.save();
        res.status(200).json(updated);
    }
    catch (err) {
        // console.error('Update error:', err);  // already done ✅
        const error = err;
        res.status(500).json({ error: error.message || 'Something went wrong while updating' }); // <-- update this
    }
};
exports.updateHeroImage = updateHeroImage;
// Delete hero image
const deleteHeroImage = async (req, res) => {
    try {
        const { _id } = req.params;
        const heroImage = await heroImageModel_1.default.findOne({ _id });
        console.log("sorry");
        if (!heroImage)
            return res.status(404).json({ message: 'hero image not found' });
        // Delete image from disk
        const imagePathM = path_1.default.join(__dirname, '..', 'uploads', heroImage.mobileImage);
        if (fs_1.default.existsSync(imagePathM))
            fs_1.default.unlinkSync(imagePathM);
        const imagePathD = path_1.default.join(__dirname, '..', 'uploads', heroImage.desktopImage);
        if (fs_1.default.existsSync(imagePathD))
            fs_1.default.unlinkSync(imagePathD);
        await heroImage.deleteOne();
        res.status(200).json({ message: 'hero image deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.deleteHeroImage = deleteHeroImage;
//# sourceMappingURL=heroImageController.js.map