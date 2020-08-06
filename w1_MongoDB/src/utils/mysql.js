/**
 * 封装mysql数据库操作的方法
 */
const mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jiaoxue',
    multipleStatements: true
});


// 回调函数实现数据传递
// function query(sql,callback){
//     pool.query(sql, (error, results, fields) => {
//         if (error) throw error;

//        callback(results)
//     })

// }

function query(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
            }

            resolve(results);
        })

    })
}


module.exports = query;