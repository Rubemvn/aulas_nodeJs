const fs = require("fs");

fs.readFile("arquivo.tx", "utf-8",(err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data, "oi")
})