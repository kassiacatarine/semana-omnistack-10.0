const express = require('express');
const mongoose = require('mongoose');
const devsRouter = require('./routes/devs.router');

const app = express();

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch((reason) => {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
  });

app.use(express.json());

app.use('/devs', devsRouter);

app.listen(3000);