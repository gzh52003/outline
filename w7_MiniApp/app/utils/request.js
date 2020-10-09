
const baseUrl = 'https://api.qfh5.cn';//'http://120.76.247.5:2020' // 
const apiUrl = baseUrl + '/api'

function request(url,data={},options={}) {
    return new Promise((resolve, reject) => {
        wx.request({
            ...options,
            url: apiUrl + url,
            data,
            success: ({ data }) => {
                resolve(data);
            },
            fail(err) {
                reject(err)
            }
        })

    })
}
request.get = function(url,data={},options={}){
    options.method = 'get';
    return request(url,data,options);
}
request.post = function(url,data={},options={}){
    options.method = 'post';
    return request(url,data,options);
}
request.put = function(url,data={},options={}){
    options.method = 'put';
    return request(url,data,options);
}
request.delete = function(url,data={},options={}){
    options.method = 'delete';
    return request(url,data,options);
}
request.patch = function(url,data={},options={}){
    options.method = 'patch';
    return request(url,data,options);
}

module.exports = request;
// exports.request = request;

// await request('/class',{},{
//     headers:{
//         Authorization
//     }
// })
// request.post()
// 