# gpt-error-analyzer-server-runtime

OpenAI GPT를 활용해 자바스크립트 에러 로그를 분석하는 [gpt-error-analyzer](https://www.npmjs.com/package/gpt-error-analyzer) 전용 서버의 **실행 전용(dist-only)** 패키지입니다.

이미 빌드된 상태로 제공되며, 별도 빌드 없이 바로 실행할 수 있습니다.

<br/>

## ⚙️ 요구사항

- Node.js 16 이상
- OpenAI API Key

<br/>

## 🚀 실행 방법

1. 레포 클론

```bash
git clone https://github.com/Seio924/gpt-error-analyzer-server-runtime.git
cd gpt-error-analyzer-server-runtime
```

2. OpenAI API 키 환경변수 등록

```bash
export OPENAI_API_KEY=sk-xxxx...
```

> 또는 `.bashrc`, `.zshrc`, Railway 환경변수에 등록

3. (선택) 포트 번호 지정

```bash
export PORT=5000
```

> 기본값은 4000입니다.

4. 의존성 설치 및 서버 실행

```bash
npm install
npm start
```

<br/>

### ⚙️ 백그라운드 실행 예시 (Linux, EC2 등)

```bash
nohup npm start > output.log 2>&1 &
```

> 실행 로그는 `output.log`에 저장됩니다.

<br/>

## 📁 원본 서버 코드가 필요하다면?

👉 [gpt-error-analyzer-server](https://github.com/Seio924/gpt-error-analyzer-server)

> TypeScript로 작성된 원본 코드 및 빌드 설정이 포함되어 있습니다.

<br/>

## 📝 License

MIT © 2025 [Seio924](https://github.com/Seio924)
