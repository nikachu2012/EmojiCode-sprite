const glob = require('glob');
const fs = require('fs');

glob('../**/*', (err, files) => {

    let fileList = [];
    files.forEach(file => {
        if (!/^..\/build/.test(file) && !/^..\/debug/.test(file) && /^..\/.*\/.*\..*/.test(file)) {
            fileList.push(file)
        }
    });

    let alldata = 
    `/* 
    EmojiCode Sprite Controller
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: ${new Date()}
*/\n`;
    fileList.forEach(element => {
        try {
            alldata += fs.readFileSync(element);
        } catch (err) {
            console.log(err)
        }
    });

    fs.writeFile('../emojisprite.js', alldata, function (err, result) {
        if (err) console.log('error', err);
    });
});
