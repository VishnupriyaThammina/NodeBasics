//the fs core module
const fs = require("fs");
fs.writeFile("./docs/blog1.txt","file written using fs.writeFile", ()=>{
    console.log("this is a callback function which is called after the file was written" )
})
// reading files
fs.readFile("./docs/blog1.txt",(err,data)=>{// two args exact file string and data or err
    if(err){
        console.log(err);
    }
    console.log(data.toString()) // a buffer is returned here on usign to string converts the buffer chars to string
});// ASYNCHRONOUS IT DOESNT BLOCK OUR CODE EVEN IF IT TAKES SOME TIME TO DO 

console.log("DISTRACTOR CODE")
//js carries on with its actions withn out letting async code effect it 




// writing files
fs.writeFile("./docs/blogs.txt","file written using fs.writeFile", ()=>{
    console.log("this is a callback function which is called after the file was written" )
})

fs.writeFile("./docs/blogs2.txt","file written using fs.writeFile to delete later", ()=>{
    console.log("this is a callback function which is called after the file was written will be deleted in bit using fs.delete" )
})

// directories
if ( !fs.existsSync("./assets")){
    fs.mkdir("./assets",(err)=>{
        if (err){
    console.log(err)
    console.log("FOlder already exits so cant create the folder again ")
        }
        console.log("as this is a async fucntion it can take a call back function to be called after the execution of the current function")
    }) 
}else{
    fs.rmdir("./assets",(err)=>{
if(err){
    console.log(err)
}
console.log("FOLDER IS DELETED")
    })
}

// deleting files

if(fs.existsSync("./docs/deleteme.txt")){
    fs.unlink("./docs/deleteme.txt", (err)=>{
        if(err){
            console.log(err)
        }
        console.log("file deleted")
    })
};
