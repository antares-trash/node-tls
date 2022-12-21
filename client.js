const tls = require('tls'),
    fs = require('fs');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem')
};

const conn = tls.connect(8000, options, function() {
    const buf = conn[Object.getOwnPropertySymbols(conn)[16]].cert;
    const pem = buf.toString('utf-8');

    console.log(pem);
});

conn.on("data", function(data) {
    console.log(data.toString());
    conn.end();
});
