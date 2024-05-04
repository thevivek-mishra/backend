const fs = require('fs');

// sync...
// fs.writeFileSync("./test.text", "hellow World");


//async
// fs.writeFile("./test.txt", "hellow world from async",(err)=>{
// console.log(err)
// })


// const result = fs.readFileSync('./contact.txt',"utf-8")
// console.log(result)

// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if(err) {
//         console.log("error", err)
//     }
//     else {
//         console.log(result)
//     }
// })

 // to append the file
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())

//to copy one file into another file
// fs.cpSync("./test.txt","./copy.txt")

// to delete the file 
// fs.unlinkSync("./copy.txt")

// to check the stastics
// let result = fs.statSync("./test.txt")

// console.log(result)

//to create folder
// fs.mkdirSync("myphoto")

//to create recursive folder
// fs.mkdirSync("myphoto/a/b",{recursive:true})