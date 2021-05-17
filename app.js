const sharp = require('sharp');
const fs = require('fs');
const directory = 'src/images/audio';


fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(600) // width, height
    // .toFile(`${directory}/${file}-small.png`)
    .toFile(directory+"/small-"+file)
});