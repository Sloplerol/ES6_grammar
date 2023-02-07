const fs = require('fs');
const path = require('path');
// fs.readFile(path.join(__dirname,'./note/note.md'),(err,data1)=>{
//     fs.readFile(path.join(__dirname,'./note/note1.md'),(err,data2)=>{
//         let result = data1 + '\n' + data2;
//         console.log(result);
//     })
// })

const p = new Promise(function(resolve,reject){
    fs.readFile(path.join(__dirname,'./note/note.md'),(err,data1)=>{
        resolve(data1.toString());        
    })
})
p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'./note/note1.md'),(err,data1)=>{
            resolve([value,data1]);     
        })
    })
    
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'./note/note2.md'),(err,data2)=>{
            value.push(data2);
            resolve(value);     
        })
    })
}).then(value=>{
    console.log(value.join('\n'));
})