"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const placementController_1 = require("../controllers/placementController");
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
// Multiple file upload: image & companyLogo
router.post('/add', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'companyLogo', maxCount: 1 }]), placementController_1.createPlacement);
router.get('/list', placementController_1.getAllPlacements);
router.put('/update/:_id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'companyLogo', maxCount: 1 }]), placementController_1.updatePlacement);
router.delete('/delete/:_id', placementController_1.deletePlacement);
exports.default = router;
//# sourceMappingURL=placementRoute.js.map