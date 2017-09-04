const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const storage = require('node-persist');
const app = express();

const api = require('./routes/api.router');


storage.initSync();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use('/api', api);

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
