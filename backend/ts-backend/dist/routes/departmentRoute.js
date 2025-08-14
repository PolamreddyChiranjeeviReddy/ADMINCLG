"use strict";
// import express from 'express';
// import upload from '../middleware/upload';
// import { addDepartment, updateDepartment } from '../controllers/departmentController';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// router.post(
//   '/add',
//   upload.fields([
//     { name: 'heroImage', maxCount: 1 },
//     { name: 'hodImage', maxCount: 1 }
//   ]),
//   addDepartment
// );
// router.put(
//   '/edit/:id',
//   upload.fields([
//     { name: 'heroImage', maxCount: 1 },
//     { name: 'hodImage', maxCount: 1 }
//   ]),
//   updateDepartment
// );
// export default router;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const departmentController_1 = require("../controllers/departmentController");
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname.replace(/\s+/g, '-');
        cb(null, uniqueName);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
router.get('/list/:code', departmentController_1.getDepartmentByCode);
router.get('/list', departmentController_1.getDepartment);
router.post('/add', upload.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'hodImage', maxCount: 1 }
]), departmentController_1.addDepartment);
router.put('/update/:_id', upload.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'hodImage', maxCount: 1 }
]), departmentController_1.updateDepartmentByCode);
router.delete('/delete/:_id', departmentController_1.deleteDepartment);
exports.default = router;
//# sourceMappingURL=departmentRoute.js.map