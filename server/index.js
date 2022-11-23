import fs from 'fs'
import path from 'path';
import express from 'express';
import bodyparser from 'body-parser';
import errorHandler from 'errorhandler';
import morgan from 'morgan';
import serveIndex from 'serve-index';
import { fileURLToPath } from 'url';
// import https from 'https'
// import chalk from 'chalk'

process.env.PWD = process.env.PWD || process.cwd()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename)

var app = express();
var port = 5000;

app.use('/', express.static(path.join(__dirname, '..', '/app')))

app.set('port', port)
app.set(morgan('dev'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})