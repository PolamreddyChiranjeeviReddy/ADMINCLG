"use strict";
// import dotenv from 'dotenv';
// import express from 'express';
// import departmentRoutes from './routes/departmentRoute';
// import cors from 'cors';
// import path from 'path';
// import {connectDB} from './config/db';
// // import db = require('./config/db.ts');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// //app config
// const app = express();
// const PORT = process.env.PORT || 5000;
// // middleware
// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({extended: true}));
// // Serve uploads statically
// app.use('/uploads', express.static(path.join('uploads')));
// // Routes
// app.use('/api/departments', departmentRoutes);
// // db connection
// connectDB();
// app.get('/', (req,  res) => {
//   res.send('✅ Server is running, i am so glad ');
// });
// app.listen(PORT, () => {
//   console.log(`🚀 Server is listening on http://localhost:${PORT}`);
// });
// //mongodb+srv://vignan:Vignan@123@cluster0.lmg3gy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// import express from 'express';
// import mongoose from 'mongoose';
// import departmentRoutes from './routes/departmentRoute';
// import {connectDB} from './config/db';
// import path from 'path';
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // Serve uploads statically
// app.use('/uploads', express.static(path.join('uploads')));
// // Routes
// app.use('/api/departments', departmentRoutes);
// // Connect to DB and start server
// // Connect to DB and start server
// mongoose.connect('mongodb://localhost:27017/vignan', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(5000, () => {
//       console.log('Server running on port 5000');
//     });
//   })
//   .catch((err) => {
//     console.log('Mongo error', err);
//   });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const departmentRoute_1 = __importDefault(require("./routes/departmentRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const newsEventsRoute_1 = __importDefault(require("./routes/newsEventsRoute"));
const heroImageRoute_1 = __importDefault(require("./routes/heroImageRoute"));
const announcementRoute_1 = __importDefault(require("./routes/announcementRoute"));
const placementRoute_1 = __importDefault(require("./routes/placementRoute"));
const helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, helmet_1.default)());
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https:", "data:", "blob:"],
        connectSrc: ["'self'", "https:"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"]
    }
}));
// app.use(cors({ origin: true, credentials: true }));
app.use((0, cors_1.default)({
    origin: ['https://adminclg.vercel.app', 'http://localhost:3000'],
    credentials: true
}));
// app.use(express.json());
app.use((0, cookie_parser_1.default)());
// app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
// Routes
app.use('/api/department', departmentRoute_1.default);
app.use('/api/user', userRoute_1.default);
app.use('/api/newsEvents', newsEventsRoute_1.default);
app.use('/api/heroImage', heroImageRoute_1.default);
app.use("/images", express_1.default.static('uploads'));
app.use("/api/announcement", announcementRoute_1.default);
app.use("/api/placement", placementRoute_1.default);
// app.use('')
// MongoDB Connection
mongoose_1.default.connect(process.env.MONGO_URI || '')
    .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
})
    .catch(err => console.error('MongoDB connection error:', err));
// Add Helmet middleware
//# sourceMappingURL=server.js.map