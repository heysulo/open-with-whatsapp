let log = require('perfect-logger');
const configs = require('./configs/configurations');

log.initialize('OpenWithWhatsApp', configs.logging);
const express = require('express');
const path = require('path');
const os = require('os');
const app = express();
const fs = require('fs');

log.info(`Server initializing in ${configs.operational.production ? 'Production' : 'Development'} mode`);
log.debug(`Hostname: ${os.hostname()}`);

// Setup Express
const http = require('http').Server(app);

http.listen(configs.http.httpPort, function () {
    log.info(`HTTP Service started and listening on PORT ${configs.http.httpPort}`);
});

// Static Files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index.ejs');
});