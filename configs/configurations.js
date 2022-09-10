exports.http = {
    httpPort: 3000,
};

exports.operational = {
    production: false,
    domain: 'heysulo.local'
};

exports.ipinfo = {
    token: ''
}

exports.logging = {
    logLevelFile: 0,
    developmentMode: !exports.operational.production,
    timezone: 'Asia/Colombo',
    logDirectory: 'logs/'
}

console.log(JSON.stringify(exports, null, 2));