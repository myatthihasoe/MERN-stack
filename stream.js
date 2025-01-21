const fs = require('fs');

const readStream = fs.createReadStream('./document/large.txt');

readStream.on('data', function (data) {
    
    console.log(data.toString());
    console.log('-----chunk-----');
});