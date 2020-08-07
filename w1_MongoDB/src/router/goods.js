const express = require('express');
const router = express.Router();

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'gzh52003';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    // client： mongo客户端

    // 匹配数据库
    const db = client.db(dbName);

    // 数据库操作


    // 数据库操作完成后关闭连接，释放资源
    client.close();
});


// get /api/goods 查询所有商品
router.get('/', (req, res) => {
    // 

    res.send()
})


module.exports = router;