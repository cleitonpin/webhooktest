const express = require('express');
const Payment = require('./controllers/Payment');

const server = express();

server.post('/webhook', Payment.webhook);

server.listen(3001 || process.env.PORT, () => console.log('rodando'))