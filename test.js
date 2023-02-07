const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello');
})
app.listen(80,()=>{
    console.log('端口已启动');
})