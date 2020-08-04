/**
 * 把整个路由模块作为一个中间件
 */

const express = require('express');
const router = express.Router();
console.log('router',router)


// 查询商品
router.get('/',(req,res)=>{
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

router.post('/',(req,res)=>{
    console.log('post=',req.body);
    res.send('添加商品成')
})

// 删：删除商品
// 动态路由
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    // 查询数据库，删除对应商品
    res.send('添加商品成')
})

// 改：修改商品
router.put('/:id',(req,res)=>{
    res.send({
        test:'test',
        ...req.params
    })
})


module.exports = router