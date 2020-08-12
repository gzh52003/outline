/**
 * 基于WebSocket的多人聊天室
    * 依赖
        * ws
 */
const http = require('http');
const express = require('express');
const ws = require('ws');

// 启动express服务器
const app = express();

app.use(express.static('./'));

// 利用http模块连接express服务器与socket服务器
const server = http.createServer(app)

// 启动一个webSocket服务器
let wss = new ws.Server({
    server,
    // port: 1001
});

// 注意：必须使用createServer返回的服务器监听端口
server.listen(2003,()=>{
    console.log('server is running');
})


// 监听事件
wss.on('connection',(client)=>{
    // 当客户端连接socket服务器时，触发connection事件，传递客户端对象，并把所有客户端对象保存在wss.clients属性中
    // client：客户端对象
    console.log('connection',wss.clients.size);

    client.on('message',(msg)=>{
        console.log('msg',msg);

        // 收到信息，广播给所有连接的用户
        wss.clients.forEach(item=>{
            item.send(msg);
        })
    })
})
