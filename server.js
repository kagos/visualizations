const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const favicon = require('serve-favicon');

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(favicon(__dirname + '/src/favicon.ico'));

app.use(express.static(__dirname + '/src'));

app.get('*', function(req, res) {
  res.sendfile('src/index.html');
});

app.listen(PORT);

console.log('Server started on ' + PORT);
