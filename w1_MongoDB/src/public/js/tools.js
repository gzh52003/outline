
const baseUrl = 'http://localhost:2003/api'
async function request(url,data={},options={}){
    url = baseUrl + url;

    // 对method处理大小写问题
    if(options.method){
        options.method = options.method.toLowerCase();
    }

    // 参数处理
    if(['get','delete'].includes(options.method) || options.method === undefined){
        // get,delete请求，参数拼接到url
        let params = []; // {a:10,b:20}
        for(let key in data){
           params.push(`${key}=${data[key]}`); // ['a=10','b=20']
        }
        params = params.join('&');// a=10&b=20

        url = url + '?' + params; // 'http://localhost:2003/api/user?a=10&b=20'
    }else if(['post','put','patch'].includes(options.method)){
        

        if(options.headers === undefined){
            options.headers = {}
        }
        if(options.headers['Content-Type'] === undefined && options.contentType !== false){
            options.headers['Content-Type'] = 'application/json';
        }

        if(options.headers['Content-Type'] === 'application/json'){
            options.body = JSON.stringify(data);
        }else{
            options.body = data;
        }
    }


    const result = await fetch(url,{
        ...options,
    }).then(res => res.json());
    
    return result;
}

request.get = (url,data,options={})=>{
    options.method = 'get';
    return request(url,data,options);
}

request.post = (url,data,options={})=>{
    options.method = 'post';
    return request(url,data,options);
}

request.put = (url,data,options={})=>{
    options.method = 'put';
    return request(url,data,options);
}

request.patch = (url,data,options={})=>{
    options.method = 'patch';
    return request(url,data,options);
}

request.delete = (url,data,options={})=>{
    options.method = 'delete';
    return request(url,data,options);
}
