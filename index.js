const tls = require('tls'),
        fs = require('fs'),
        msg = [
                ".-..-..-.  .-.   .-. .--. .---. .-.   .---. .-.",
                ": :; :: :  : :.-.: :: ,. :: .; :: :   : .  :: :",
                ":    :: :  : :: :: :: :: ::   .': :   : :: :: :",
                ": :: :: :  : `' `' ;: :; :: :.`.: :__ : :; ::_;",
                ":_;:_;:_;   `.,`.,' `.__.':_;:_;:___.':___.':_;"
        ].join("\n");

const options = {
        key: fs.readFileSync('private-key.pem'),
        cert: fs.readFileSync('public-cert.pem')
};

tls.createServer(options, function(s) {
        s.write(msg + "\n");
        s.pipe(s);
}).listen(8000);
