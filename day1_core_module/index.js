const fs = require('fs')
console.log("hello moto")
// create file in folder with the help of core module
fs.writeFileSync("one.txt" , "Welcometo home")
fs.writeFileSync("one.txt" , 'hello abuzer how r u  ')
// Adding new data in txt file
fs.appendFileSync("one.txt" , ' where are you from buddy ')
// how to read file data
const data = fs.readFileSync("one.txt");
console.log(data.toString())

{/!* <Buffer 68 65 6c 6c 6f 20 61 62 75 7a 65 72 20 68 6f 77 20 72 20 75 20 20 20 77 68 65 72 65 20 61 72 65 20 79 6f 75 20 66 72 6f 6d 20 62 75 64 64 79 20> */}

//* value will change in buffer . buffer store binary data


// ! how to change file name
fs.renameSync("one.txt" , 'abuzer.txt')










