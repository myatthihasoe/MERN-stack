const fs = require('fs');

const readStream = fs.createReadStream('./document/large.txt');
const writeStream = fs.createWriteStream('./document/large-write.txt');
// readStream.on('data', function (data) {
    
//     console.log(data.toString());
//     console.log('-----chunk-----');
// });

readStream.on('data', function (data) {
    
    writeStream.write(data.toString());
    writeStream.write('-----chunk-----');
});