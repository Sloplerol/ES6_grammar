const fs = require('fs');
const path = require('path');

function readnote1(){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'./note/note.md'),function(err,data){
            if(err) reject(err);
            resolve(data.toString());
        })
    })
}
function readnote2(){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'./note/note1.md'),function(err,data){
            if(err) reject(err);
            resolve(data.toString());
        })
    })
}
function readnote3(){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'./note/note2.md'),function(err,data){
            if(err) reject(err);
            resolve(data.toString());
        })
    })
}
async function fn(){
    let note1 = await readnote1();
    let note2 = await readnote2();
    let note3 = await readnote3();
    console.log(note1);
    console.log(note2);
    console.log(note3);
}
fn();