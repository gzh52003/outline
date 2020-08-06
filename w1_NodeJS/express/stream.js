const fs = require('fs');

// const filePath = './goods.html'
const filePath = './img/g3.jpg'

// fs.readFile(filePath,(err,data)=>{
//     if(err) throw err;

//     console.log('data=',data.toString());
// })

// const streamFile = fs.createReadStream(filePath);

// let result = ''

// streamFile.on('data',(chunk)=>{
//     // 每一次读取数据都会触发data事件
//     console.log('chunk=',chunk.toString('base64'))
//     result += chunk.toString('base64');
// });

// streamFile.on('end',()=>{
//     console.log('文件读取完毕');
//     console.log('result=',result);
// })


const writerStream = fs.createWriteStream('./goods.json');

for(let i=0;i<5;i++){
    writerStream.write('test\t'+i + '\n','UTF8');
}



writerStream.on('finish', function() {
    console.log("写入完成。");
});


// 结束文件写入操作
writerStream.end();