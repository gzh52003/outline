const jwt = require('jsonwebtoken');

const privateKey = 'laoxie';

function create(data={},expiresIn='2h'){
    const token = jwt.sign({ ...data }, privateKey ,{
        // token有效期
        expiresIn
    });

    return token;
}

function verify(token){
    let result ;
    try{
        jwt.verify(token, privateKey);
        result = true;
    }catch(err){
        result = false
    }

    return result;
}


module.exports = {
    create,
    verify
}