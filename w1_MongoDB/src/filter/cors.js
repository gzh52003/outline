const whiteList = ['http://localhost:8080','http://localhost:8081','http://120.76.247.5:2004']

function cors(req,res,next){
    // 设置响应头
    // Access-Control-Allow-Origin
    // Access-Control-Allow-Methods
    // Access-Control-Allow-Headers

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,PATCH,DELETE,OPTIONS");


    // 获取请求者的域名
    const origin = req.get('Origin')
    console.log('origin=',origin);
    if(whiteList.includes(origin)){
        res.set({
            "Access-Control-Allow-Origin":origin,
            "Access-Control-Allow-Headers":"Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
            "Access-Control-Allow-Methods":"PUT,POST,GET,PATCH,DELETE,OPTIONS",
            "Access-Control-Allow-Credentials":true
        })
        // 跨域请求CORS中的预请求
        if(req.method=="OPTIONS") {
            res.sendStatus(200);/*让options请求快速返回*/
        } else{
            next();
        }
    }else{
        next();
    }

}

module.exports = cors;