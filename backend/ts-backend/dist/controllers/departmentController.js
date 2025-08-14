"use strict";
// import departmentModel from '../models/departmentModel';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDepartment = exports.addDepartment = exports.updateDepartmentByCode = exports.getDepartmentByCode = exports.getDepartment = void 0;
const departmentModel_1 = __importDefault(require("../models/departmentModel"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const getDepartment = async (req, res) => {
    try {
        const { code } = req.params;
        const department = await departmentModel_1.default.find();
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        res.status(200).json(department);
    }
    catch (err) {
        res.status(500).json({ error: 'Error fetching department' });
    }
};
exports.getDepartment = getDepartment;
const getDepartmentByCode = async (req, res) => {
    try {
        const { code } = req.params;
        const department = await departmentModel_1.default.find({ code });
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        res.status(200).json(department);
    }
    catch (err) {
        res.status(500).json({ error: 'Error fetching department' });
    }
};
exports.getDepartmentByCode = getDepartmentByCode;
const updateDepartmentByCode = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, about, hodName, hodMessage, vision, mission, faculty, } = req.body;
        const department = await departmentModel_1.default.findOne({ _id });
        if (!department) {
            return res.status(404).json({ error: 'Department not found' });
        }
        department.name = name || department.name;
        department.about = about || department.about;
        department.hodName = hodName || department.hodName;
        department.hodMessage = hodMessage || department.hodMessage;
        department.vision = vision || department.vision;
        department.mission = mission ? JSON.parse(mission) : department.mission;
        department.faculty = faculty ? JSON.parse(faculty) : department.faculty;
        // Replace images if uploaded
        if (req.files?.heroImage) {
            const heroPath = path_1.default.join(__dirname, '..', 'uploads', department.heroImage);
            if (department.heroImage && fs_1.default.existsSync(heroPath)) {
                fs_1.default.unlinkSync(heroPath);
            }
            department.heroImage = req.files.heroImage[0].filename;
        }
        if (req.files?.hodImage) {
            const hodPath = path_1.default.join(__dirname, '..', 'uploads', department.hodImage);
            if (department.hodImage && fs_1.default.existsSync(hodPath)) {
                fs_1.default.unlinkSync(hodPath);
            }
            department.hodImage = req.files.hodImage[0].filename;
        }
        const updated = await department.save();
        res.status(200).json(updated);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Something went wrong while updating' });
    }
};
exports.updateDepartmentByCode = updateDepartmentByCode;
const addDepartment = async (req, res) => {
    try {
        const { code, name, about, hodMessage, hodName, vision, mission, faculty } = req.body;
        const heroImage = req.files?.['heroImage']?.[0]?.filename;
        const hodImage = req.files?.['hodImage']?.[0]?.filename;
        if (!heroImage || !hodImage) {
            return res.status(400).json({ error: 'Images are required' });
        }
        const department = new departmentModel_1.default({
            code,
            name,
            heroImage,
            about,
            hodMessage,
            hodName,
            hodImage,
            vision,
            mission: JSON.parse(mission),
            faculty: JSON.parse(faculty)
        });
        await department.save();
        res.status(201).json({ message: 'Department added successfully', department });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message || 'Server error' });
    }
};
exports.addDepartment = addDepartment;
const deleteDepartment = async (req, res) => {
    try {
        const { _id } = req.params;
        const department = await departmentModel_1.default.findOne({ _id });
        console.log("sorry");
        if (!department)
            return res.status(404).json({ message: 'department not found' });
        // Delete image from disk
        const heroImage = path_1.default.join(__dirname, '..', 'uploads', department.heroImage);
        if (fs_1.default.existsSync(heroImage))
            fs_1.default.unlinkSync(heroImage);
        const hodImage = path_1.default.join(__dirname, '..', 'uploads', department.hodImage);
        if (fs_1.default.existsSync(hodImage))
            fs_1.default.unlinkSync(hodImage);
        await department.deleteOne();
        res.status(200).json({ message: 'hero image deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.deleteDepartment = deleteDepartment;
//# sourceMappingURL=departmentController.js.map