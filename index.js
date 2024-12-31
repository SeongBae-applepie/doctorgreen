
require('dotenv').config();

// express 모듈 가져오기
const express = require('express');
const app = express();

// 포트 설정
const PORT = 3000;

// 기본 라우트 (GET 요청)
app.get('/', (req, res) => {
    res.send('Hello, World! This is an Express server.');
    console.log("vsit")
});

// 다른 라우트 추가 (예: /about)
app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

// 서버 실행
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});