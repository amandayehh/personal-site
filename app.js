const sharp = require('sharp');
const fs = require('fs');
const directory = 'src/images/index';


fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(400) // width, height
    // .toFile(`${directory}/${file}-small.png`)
    .toFile(directory+"/small-"+file)
});