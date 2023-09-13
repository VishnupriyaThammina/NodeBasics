const import1 = require("./people")
console.log(import1) //is an empty object is returned
// is undefined
//inorder to import we should manually export the files

// now we imported people and ages present in people.js
// using destructuring

const {people} = require("./people")
console.log(people)

const os = require("os")//built in module in node
console.log(os.homedir)