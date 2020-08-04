const express = require('express');

// 开启一个服务器
const app = express();

// 开启静态资源服务器
// express.static()中间件处理逻辑：
// 1. 如匹配静态资源，直接返回
// 2. 如果不匹配，则执行next()
const middleware = express.static('./');
app.use(middleware); // next()

// 自定义中间件
// app.use((req,res,next)=>{
//     console.log('中间件1')
//     next();
// },(req,res,next)=>{
//     console.log('中间件2')
//     next();
// },(req,res,next)=>{
//     console.log('中间件3')
//     res.send('中间件测试')
// })

// app.use((req,res,next)=>{

// })

// app.use((req,res,next)=>{

// })

// app.use((req,res,next)=>{
//     console.log('test')
// })


// 数据接口
// 带路径的中间件：只有请求匹配路径后才进入中间件
// use： 不管是get,post,patch,put,delete...都可以进入
// app.use('/goods',(req,res,next)=>{
    
app.use(express.json(),express.urlencoded())

// 查询商品
app.get('/goods',(req,res)=>{
    console.log('goods=',req.query);
    const goodslist = [];
    for(let i=0;i<10;i++){
        const goods = {
            id:'guid'+i,
            name:'goods' + i,
            price:parseInt(Math.random()*10000),
            imgurl:`img/goods${i}.jpg`
        }

        goodslist.push(goods);
    }
    res.send(goodslist);
});

// 增：添加商品

app.post('/goods',(req,res)=>{
    console.log('post=',req.body);
    res.send('添加商品成')
})

// 删：删除商品
// 动态路由
app.delete('/goods/:id',(req,res)=>{
    const {id} = req.params;
    // 查询数据库，删除对应商品
    res.send('添加商品成')
})

// 改：修改商品
app.put('/goods/:id',(req,res)=>{
    res.send(req.params)
})

app.post('/reg',(req,res)=>{

   res.send('注册成功')
});



app.listen(2003,()=>{
    console.log('server is running on port 2003');
});