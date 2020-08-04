const express = require('express');
const {PORT} = require('./config.json');
const allRouter = require('./router');
const app = express();

// 获取商品路由
app.use(allRouter);


app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`)
})