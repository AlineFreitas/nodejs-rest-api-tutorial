'use strict'

const express = require('express');
const app = express();

const port = process.env.PORT || 3333;

console.log(`Starting app on port ${port}`);
app.listen(port);