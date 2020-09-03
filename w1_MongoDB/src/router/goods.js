const express = require('express');
const router = express.Router();

const mongo = require('../utils/mongo');
const {formatData} = require('../utils/tools')


// get /api/goods 查询所有商品
router.get('/', async (req, res) => {
    let {page=1,size=10,sort="add_time",total=1} = req.query;
    const skip = (page-1)*size; //0
    const limit = size*1; //10

    
    // 处理排序参数
    sort = sort.split(',');// ['price'],['price','-1']
    // 查询所有商品
    const result = await mongo.find('goods',{},{skip,limit,sort,total})

    res.send(formatData({data:result}));
})

router.delete('/:id',async (req,res)=>{
    const {id} = req.params;

    try{
        const result = await mongo.remove('goods',{_id:id})
        res.send(formatData())

    }catch(err){
        res.send(formatData({code:0}));
    }

})

router.get('/:id',async (req,res)=>{
    const {id} = req.params;

    try{
        const result = await mongo.find('goods',{_id:id})
        res.send(formatData({data:result[0]}))

    }catch(err){
        res.send(formatData({code:0}));
    }
})

router.get('/:id/kucun',async (req,res)=>{
    const {id} = req.params;

    // 读取数据库的库存信息
    const kc = 6;

    setTimeout(()=>{
        res.send(formatData({data:kc}))
    },500);
})


module.exports = router;