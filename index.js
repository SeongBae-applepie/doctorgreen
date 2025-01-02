// // npm init
// // npm install dotenv, express , mysql2 ,jsonwebtoken


// require('dotenv').config();

// // express 모듈 가져오기
// const express = require('express');
// const app = express();

// // 포트 설정
// const PORT = 3000;

// // 기본 라우트 (GET 요청)
// app.get('/', (req, res) => {
//     res.send('Hello, World! This is an Express server.');
//     console.log("vsit")
// });

// // 다른 라우트 추가 (예: /about)
// app.get('/about', (req, res) => {
//     res.send('This is the About page.');
// });

// // 서버 실행
// app.listen(PORT,'0.0.0.0', () => {
//     console.log(`Server is running on http://0.0.0.0:${PORT}`);
// });



const user = require('./js/jwt'); //controller import
const express = require('express'); //express import

const app = express()
const port = 3000

// body 데이터를 json형식으로 사용
app.use(express.json())

// 3000번 포트로 서버 실행
app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

// 기본 경로
app.get('/', (req, res) =>{
    res.send('Hello world!')
})

// 로그인 경로
app.post('/login',jwt.login)

// access 토큰 재발급 경로
app.get('/refresh',jwt.refresh)