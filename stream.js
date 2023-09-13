const fs = require("fs");
const writeStream = fs.createWriteStream("./docs/blogstream.txt");

const readStream = fs.createReadStream("./docs/bblog1.txt",{encoding:"utf8"});
readStream.on("data",(chunk)=>{
    console.log("-----------------new chunk------------------")
    // console.log(chunk)
    writeStream.write(chunk);

})


readStream.pipe(writeStream)