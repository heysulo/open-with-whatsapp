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

let visitCount = 0;

if (configs.ipinfo.token) {
    app.use(ipinfo({
        token: configs.ipinfo.token,
        cache: null,
        timeout: 5000,
        ipSelector: (req) => {
            return req.headers['x-forwarded-for']
        }
    }))
}

// Setup Express
const http = require('http').Server(app);

http.listen(configs.http.httpPort, function () {
    log.info(`HTTP Service started and listening on PORT ${configs.http.httpPort}`);
});

// Static Files
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    visitCount += 1;
    let countryCode = 'LK';
    if (configs.ipinfo.token) {
         countryCode = req.ipinfo.countryCode;
    }
    res.render('index.ejs', {country: countryCode, visitCount: visitCount});
});
