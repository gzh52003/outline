const express = require('express');
const {PORT} = require('./config.json');
const rootRouter = require('./router');
const path = require('path')

//创建一个服务器
const app = express();

// 启用静态资源服务器
app.use(express.static(path.join(__dirname,'./public'),{
    // maxAge:60*60*1000*24
}));

// 数据接口
app.use('/api',rootRouter);

app.listen(PORT,()=>{
    console.log('server is running on port '+PORT)
})