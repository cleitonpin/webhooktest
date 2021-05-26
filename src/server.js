const express = require('express');
const Payment = require('./controllers/Payment');

const server = express();

const PORT = process.env.PORT || 3000;

server.post('/webhook', Payment.webhook);

server.listen(PORT, () => console.log('rodando'))