const express = require('express');
const router = express.Router();
const query = require('../utils/mysql');
const mongo = require('../utils/mongo');
const {formatData} = require('../utils/tools')

// const mysql = require('mysql');

// 配置数据库
// 第一种：使用连接对象
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'jiaoxue'
// });

// 第二种：使用连接池（推荐）
//创建连接池：默认创建10个连接对象放到连接池中
// var pool  = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database: 'jiaoxue',
//     multipleStatements: true
// });

router.get('/',async (req,res)=>{
    // 读取数据库，获取所有用户
    // let sql = `select * from user`;
    
    // 1. 连接mySQL数据库
    // connection.connect();

    // // 2. 查询所有用户
    // connection.query(sql, (error, results, fields) => {
    //     if (error) throw error;
    //     console.log('results=', results);
    //     console.log('fields=', fields);
    //     res.send(results)

    //     // 关闭连接，释放资源
    //     connection.end();
    // })
    
    // pool.query(sql, (error, results, fields) => {
    //     if (error) throw error;
    //     console.log('results=', results);
    //     console.log('fields=', fields);
    //     res.send(results)
    // })

    // query(sql,function(result){
    //     res.send(reusult)
    // })

    // const result = await query(sql); // 等效于query(sql).then(result=>{})


    // mongo
    const result = await mongo.find('user')
    res.send(formatData({data:result}));
})

router.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    let sql = `delete from user where id=${id}`;
    // connection.connect();
    // connection.query(sql, (error, results, fields) => {
    //     if (error) throw error;
       
    //     res.send('删除成功')
    //     connection.end()
    // })

    // pool.query(sql, (error, results, fields) => {
    //     if (error) throw error;
       
    //     res.send('删除成功')
    // })

    try{
        // 尝试执行这里的代码
        const result = await query(sql);
        res.send(result)
    }catch(err){
        // 如果上面的代码有报错，则执行这里的代码
        res.send('删除失败')
    }

    
    
})

module.exports = router;