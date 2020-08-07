/**
 * MongoDB操作封装
 */
const { MongoClient } = require('mongodb');

// mongodb数据库地址
const url = 'mongodb://localhost:27017';

// 数据库名称
const dbName = 'gzh52003';


async function connect(){
    // return new Promise((resolve,reject)=>{
    //     MongoClient.connect(url, function (err, client) {
    //         // client： mongo客户端

    //         if(err){
    //             reject(err);
    //         }
        
    //         // 匹配数据库
    //         const db = client.db(dbName);

    //         // 导出db和client
    //         resolve({db,client})
        
    //         // 数据库操作
        
        
    //         // 数据库操作完成后关闭连接，释放资源
    //         // client.close();
    //     });

    // })

    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    return {client,db}
}


// 增
async function insert(colName,data){
    // 1. 连接数据库
    const {db,client} = await connect();
    // 2. 添加数据

    // 根据传入的集合名称获取数据库中的某个集合
    const collection = db.collection(colName);

    // if(Array.isArray(data)){
    //     collection.insertMany(data); // collection['inserMany']
    // }else{
    //     collection.insertOne(data)
    // }
    
    collection[Array.isArray(data) ? 'insertMany':'insertOne'](data)

    // 3. 关闭连接
    client.close()
}

// 删
function remove(){

}

// 改
function update(){

}

// 查
function find(){

}

module.exports = {
    insert,
    remove,
    update,
    find
}