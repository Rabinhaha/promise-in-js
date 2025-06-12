// const { promises } = require("dns")
// const fs = require("fs")

// function readTheFile(sendthefinalvaluehere){

// fs.readFile("a.txt","utf-8",function(err,data){

//     sendthefinalvaluehere(data)
// })

// }

// function readFile(){

//     return new Promise(readTheFile)
// }

// const p =readFile()
// function callback(contents){

//     console.log(contents)
// }
// p.then(callback)

const fs= require("fs")

function readTheFile(sendFile){

    fs.readFile("b.txt","utf-8",function(err,data){

    sendFile(data)

    })

}

function readFile(){
    return new Promise(readFile)
}

const p = readFile()
function callback(contents){

    console.log(contents)
}
p.then(callback)
