"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gptController = void 0;
const createGptPrompt_1 = require("../services/createGptPrompt");
const gptService_1 = require("../services/gptService");
exports.gptController = {
    analyze: async (req, res) => {
        const { message, stack, timestamp } = req.body;
        if (!message) {
            res.status(400).json({ error: 'message는 필수입니다.' });
            return;
        }
        const prompt = (0, createGptPrompt_1.createGptPrompt)({ message, stack, timestamp });
        try {
            const summary = await gptService_1.gptService.analyze(prompt);
            res.json({ summary });
        }
        catch (err) {
            console.error('GPT 호출 실패:', err);
            res.status(500).json({ error: 'GPT 분석 중 오류가 발생했습니다.' });
        }
    },
};
