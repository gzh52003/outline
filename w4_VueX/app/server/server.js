const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('./public'))

app.use((req,res)=>{
    // 读取index.html内容
    const content = fs.readFileSync('./public/index.html');
    res.set('Content-Type','text/html;charset=utf-8');
    res.send(content.toString())
})

app.listen(2004,()=>{
    console.log('server is runing on port 2004')
})