const express = require('express');
const helmet = require('helmet');
const carRouter = require('./carRouter');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carRouter);

server.use('/', (req,res) => {
  res.json('Welcome to the Cars server')
})

module.exports = server;