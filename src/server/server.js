const express = require('express');
const app = express();
const apiRouter = require('./config/router')
const bodyParser = require('body-parser');
const serverConfig = require('../server/config/config') 
const {errorHandler} = require('./config/middleware')

app.use(express.static(__dirname  + './../client/')) //serves the index.html
app.use(express.static(__dirname  + './../../build/'))
app.use(bodyParser.json())
app.use(errorHandler)

apiRouter.create(app)

app.listen(serverConfig.port)

console.log('listening to the port ' + serverConfig.port);

module.exports = app