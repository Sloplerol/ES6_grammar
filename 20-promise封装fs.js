const fs = require('fs');
const path = require('path');
// fs.readFile(path.join(__dirname,'/note.md'),function(err,dataStr){
//     if(err) throw err;
//     console.log(dataStr.toString());
// })


//使用promise来封装异步任务
const p = new Promise(function(resolve,reject){
    fs.readFile(path.join(__dirname,'/note.md'),function(err,dataStr){
        if(err) {
            reject(err);
        }
        resolve(dataStr);
    });
});
p.then(function(value){
    console.log(value.toString());
}),function(reason){
    console.log('程序出错了');
}
