/**
 * 静态资源服务器
 *  * 图片
 *  * html
 *  * css
 *  * js
 *  * ...文件
 
* 其他语言
    * PHP（后端语言） + Apache（服务器）
    * Java + Tomcat
    * .net + IIS
    * ...

* 在Nodejs中实现静态资源服务器
    * 所需模块
        * http
        * fs
        * url
        * path
* 一次http请求的过程
    * 请求：request   请求对象
        * 客户端->服务器
    * 响应：response  响应对象
        * 服务器 -> 客户端
 */


 const http = require('http');
 const url = require('url');
 const path = require('path');
 const fs = require('fs');

 const mime = require('./js/mime');

 // require()： 引入一个模块
 const {getData} = require('./module/test');
 console.log('getData',getData);

 // 默认引入 ./module/index.js
 const myModule = require('./module')
 console.log('myModule=',myModule);

 const server = http.createServer((req,res)=>{
    // 静态资源服务器要根据不同的请求地址响应不同的内容

    // 获取访问路径
    const {pathname} = url.parse(req.url);// {pathname,base...}

    // 把路径转成系统绝对路径
    const realpath = path.join(__dirname,pathname);
    console.log('realpath=',realpath);

    // 获取请求静态资源文件的后缀
    const extname = path.extname(pathname).substring(1);// .png -> png

    // 利用Fs模块读取静态资源
    fs.readFile(realpath,(err,data)=>{
        if(err){
            return res.end('404');
        }
        // res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        res.writeHead(200,{'Content-Type':mime[extname] + ';charset=utf8'});
        res.end(data);
    })

    // console.log('server')
    // // 告诉浏览器响应的内容与编码
    // res.writeHead(200,{
    //     "Content-Type":"text/html;charset=utf-8"
    // })

    // // 响应内容
    // res.write('<h1>hello laoxie</h1>');
    // res.end('<div>结束</div>');
 })

 // 端口范围：65536     2^16
 server.listen(2003,()=>{
     console.log('server is running');
 })
