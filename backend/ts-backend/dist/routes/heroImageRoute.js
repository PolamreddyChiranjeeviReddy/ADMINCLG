"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// import upload from "../middlewares/upload";
const heroImageController_1 = require("../controllers/heroImageController");
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
const router = express_1.default.Router();
router.post("/add", upload.fields([
    { name: "desktopImage", maxCount: 1 },
    { name: "mobileImage", maxCount: 1 },
]), heroImageController_1.createHeroImage);
router.get("/list", heroImageController_1.getHeroImages);
router.delete("/delete/:_id", heroImageController_1.deleteHeroImage);
router.put("/update/:_id", upload.fields([
    { name: "desktopImage", maxCount: 1 },
    { name: "mobileImage", maxCount: 1 },
]), heroImageController_1.updateHeroImage);
exports.default = router;
//# sourceMappingURL=heroImageRoute.js.map