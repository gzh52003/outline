const crypto = require('crypto');

function formatData({code=1,data=[],msg='success'}={}){

    if(code === 0){
        msg = 'fail';
    }

    return {
        code,
        data,
        msg
    }
}


function md5(data,privateKey='laoxie'){

    const hash = crypto.createHash('md5');
    hash.update(data+privateKey); // 加盐 盐值
    const result = hash.digest('hex');

    return result;
}


module.exports = {
    formatData,
    md5
}