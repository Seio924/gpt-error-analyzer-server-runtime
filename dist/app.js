"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const gptAnalyzeRouter_1 = require("./routes/gptAnalyzeRouter");
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: true,
        credentials: false,
        methods: ['POST'],
        allowedHeaders: ['Content-Type'],
    }));
    app.use(express_1.default.json());
    app.use('/gpt-analyze', gptAnalyzeRouter_1.gptAnalyzeRouter);
    return app;
}
