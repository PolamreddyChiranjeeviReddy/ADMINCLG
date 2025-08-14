"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlacement = exports.updatePlacement = exports.getAllPlacements = exports.createPlacement = void 0;
const placementModel_1 = __importDefault(require("../models/placementModel"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const createPlacement = async (req, res) => {
    try {
        const { student, company, package: pkg } = req.body;
        const image = req.files && req.files.image ? req.files.image[0].filename : '';
        const companyLogo = req.files && req.files.companyLogo ? req.files.companyLogo[0].filename : '';
        const newPlacement = await placementModel_1.default.create({
            student,
            company,
            package: pkg,
            image,
            companyLogo,
        });
        res.status(201).json(newPlacement);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.createPlacement = createPlacement;
const getAllPlacements = async (_req, res) => {
    try {
        const placements = await placementModel_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(placements);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.getAllPlacements = getAllPlacements;
const updatePlacement = async (req, res) => {
    try {
        const { _id } = req.params;
        const { student, company, package: pkg } = req.body;
        const placement = await placementModel_1.default.findById(_id);
        if (!placement) {
            return res.status(404).json({ error: 'Placement not found' });
        }
        // Update text fields
        placement.student = student || placement.student;
        placement.company = company || placement.company;
        placement.package = pkg || placement.package;
        // Replace image if uploaded
        if (req.files && req.files.image) {
            const newImage = req.files.image[0].filename;
            const oldImagePath = path_1.default.join(__dirname, '..', 'uploads', placement.image);
            if (placement.image && fs_1.default.existsSync(oldImagePath)) {
                fs_1.default.unlinkSync(oldImagePath);
            }
            placement.image = newImage;
        }
        // Replace companyLogo if uploaded
        if (req.files && req.files.companyLogo) {
            const newLogo = req.files.companyLogo[0].filename;
            const oldLogoPath = path_1.default.join(__dirname, '..', 'uploads', placement.companyLogo);
            if (placement.companyLogo && fs_1.default.existsSync(oldLogoPath)) {
                fs_1.default.unlinkSync(oldLogoPath);
            }
            placement.companyLogo = newLogo;
        }
        const updatedPlacement = await placement.save();
        res.status(200).json(updatedPlacement);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.updatePlacement = updatePlacement;
const deletePlacement = async (req, res) => {
    try {
        const { _id } = req.params;
        const placement = await placementModel_1.default.findById(_id);
        if (!placement) {
            return res.status(404).json({ message: 'Placement not found' });
        }
        // Delete image files
        const imagePath = path_1.default.join(__dirname, '..', 'uploads', placement.image);
        if (fs_1.default.existsSync(imagePath))
            fs_1.default.unlinkSync(imagePath);
        const logoPath = path_1.default.join(__dirname, '..', 'uploads', placement.companyLogo);
        if (fs_1.default.existsSync(logoPath))
            fs_1.default.unlinkSync(logoPath);
        await placement.deleteOne();
        res.status(200).json({ message: 'Placement deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.deletePlacement = deletePlacement;
//# sourceMappingURL=placementController.js.map