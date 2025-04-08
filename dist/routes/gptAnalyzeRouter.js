"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gptAnalyzeRouter = void 0;
const express_1 = require("express");
const gptController_1 = require("../controllers/gptController");
exports.gptAnalyzeRouter = (0, express_1.Router)();
exports.gptAnalyzeRouter.post('/', gptController_1.gptController.analyze);
