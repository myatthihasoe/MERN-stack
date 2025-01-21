const fs = require('fs'); // default library for file system


//write

// if (!fs.existsSync('./document/mernstack.txt')) {
//     fs.writeFile('./document/mernstack.txt', 'File write read testing', (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     });
// }
//delete
// else {
//     fs.unlink('./document/mernstack.txt', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('File deleted');
//         }
//     })
// }


//read

/*fs.readFile('./document/mernstack.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});     */

const path ='./newfolder';
//folder delete
if (fs.existsSync(path)) {
    fs.rmdirSync(path, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Folder deleted');
        }
    });
}

//folder create
else {
    fs.mkdir(path, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Folder created');
        }
    
    });
}
