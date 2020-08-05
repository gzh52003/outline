const express = require('express');

const router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');
// router.get('/proxy',(req,res)=>{
//     // http://localhost:2003就是我们的代理服务器
//     // 在代理服务器中请求目标服务器数据（因为后端没有跨域限制）

//     // 发起请求，目标服务器返回数据后，原样响应给前端
//     // res.send()
// })
const dtMiddleware = createProxyMiddleware({
    "target": "https://www.duitang.com", // 目标服务器
    "changeOrigin": true,

    // 路径替换
    "pathRewrite": {
        "^/proxy/dt" : "/"
    }
})

const nsgMiddleware = createProxyMiddleware({
    "target": "https://www.nanshig.com", // 目标服务器
    "changeOrigin": true,

    // 路径替换
    "pathRewrite": {
        "^/proxy/nsg" : "/"
    }
})

// http://localhost:2003/proxy/shop/index.php?act=show_store&op=ajax_flowstat_record&store_id=39&goods_id=227010&act_param=goods&op_param=index'
// -> https://www.nanshig.com/proxy/shop/index.php?act=show_store&op=ajax_flowstat_record&store_id=39&goods_id=227010&act_param=goods&op_param=index'
// -> https://www.nanshig.com/shop/index.php?act=show_store&op=ajax_flowstat_record&store_id=39&goods_id=227010&act_param=goods&op_param=index'
router.use('/nsg',nsgMiddleware)
router.use('/dt',dtMiddleware)

module.exports = router;