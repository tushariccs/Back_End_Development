const fs = require("fs")

// fs.writeFile("message.txt","Hello from node.js",(err)=>{
// if(err) throw err
// console.log("File saved")
// });

a = fs.readFile("message.txt",'utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
