"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGptPrompt = createGptPrompt;
function createGptPrompt({ message, stack, timestamp }) {
    return `
다음은 자바스크립트 에러 로그입니다. 어떤 에러인지, 왜 발생했는지, 해결 방법은 무엇인지 한국어로 간단하게 설명해주세요.

에러 메시지:
${message}

스택 트레이스:
${stack ?? '없음'}

발생 시각: 
${timestamp ? new Date(timestamp).toLocaleString() : '알 수 없음'}
  `.trim();
}
