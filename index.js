let log = require('perfect-logger');
const configs = require('./configs/configurations');

log.initialize('OpenWithWhatsApp', configs.logging);
const express = require('express');
const path = require('path');
const os = require('os');
const app = express();
const ipinfo = require('ipinfo-express')
app.engine('html', require('ejs').renderFile);

log.info(`Server initializing in ${configs.operational.production ? 'Production' : 'Development'} mode`);
log.debug(`Hostname: ${os.hostname()}`);

app.use(ipinfo({
    token: configs.ipinfo.token,
    cache: null,
    timeout: 5000,
    ipSelector: (req) => {
        return req.headers['x-forwarded-for']
    }
}))

// Setup Express
const http = require('http').Server(app);

http.listen(configs.http.httpPort, function () {
    log.info(`HTTP Service started and listening on PORT ${configs.http.httpPort}`);
});

// Static Files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index.ejs', {country: req.ipinfo.countryCode});
});
