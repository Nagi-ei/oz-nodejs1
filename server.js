// server.js
const express = require('express');
const cors = require('cors');
const app = express();

let data = { message: '여러분 화이팅!' };

app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
    headers: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
  })
);

// GET에서 json 쓰는데 왜 없어도 가능? 요청하는 본문이 아니라서?
// app.use(express.json());
app.use(express.text());

// options?
// app.options('/', (req, res) => {
//   res.send();
// });

app.get('/', (req, res) => {
  res.json(data);
});

// POST 없음
// app.post('/', (req, res) => {
//   data.message = req.body;
//   res.send(data);
// });

app.put('/', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${data.message}`);
});

app.delete('/', (req, res) => {
  data.message = '';
  res.send('데이터가 삭제되었습니다.');
});

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
