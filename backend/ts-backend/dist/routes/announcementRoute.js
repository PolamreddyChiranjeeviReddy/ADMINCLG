"use strict";
// import { Router } from "express";
// import {
//   createAnnouncement,
//   getAnnouncements,
// //   getAnnouncementById,
//   updateAnnouncement,
//   deleteAnnouncement,
// } from "../controllers/announcementController";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = Router();
// router.post("/add", createAnnouncement);        // Create new
// router.get("/list", getAnnouncements);           // Get all
// // router.get("/:id", getAnnouncementById);     // Get single
// router.put("/update/:_id", updateAnnouncement);      // Update
// router.delete("/delete/:_id", deleteAnnouncement);   // Delete
// export default router;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const announcementController_1 = require("../controllers/announcementController");
// Configure multer to handle form data without file uploads
const upload = (0, multer_1.default)(); // This creates multer instance for parsing form data only
const router = (0, express_1.Router)();
// Use multer middleware to parse multipart form data
router.post("/add", upload.none(), announcementController_1.createAnnouncement); // .none() means no file uploads expected
router.get("/list", announcementController_1.getAnnouncements);
router.put("/update/:_id", upload.none(), announcementController_1.updateAnnouncement);
router.delete("/delete/:_id", announcementController_1.deleteAnnouncement);
exports.default = router;
//# sourceMappingURL=announcementRoute.js.map