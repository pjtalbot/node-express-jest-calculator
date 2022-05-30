const express = require('express');

const app = express();

// need to configure express

app.use(express.json());
app.use(express.urlencoded({ extended: true }))