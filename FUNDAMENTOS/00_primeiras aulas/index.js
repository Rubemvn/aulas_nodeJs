<<<<<<< HEAD:FUNDAMENTOS/00_primeiras aulas/index.js
const fs = require("fs");

fs.readFile("arquivo.tx", "utf-8",(err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data, "oi")
=======
const fs = require("fs");

fs.readFile("arquivo.txt", "utf-8",(err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data)
>>>>>>> 303d2e4ef8296884f86872ccabc61da6b5e7e288:01_primeiras aulas/index.js
})