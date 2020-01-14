const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.listen(3000);