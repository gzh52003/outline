const express = require('express');
const router = express.Router();
const svgCaptcha = require('svg-captcha');

const {formatData} = require('../utils/tools');

// 生成验证码
router.get('/',async (req,res)=>{
   // 生成图像验证码：svg-captcha
   const options = {
        // size: 10,
        noise:3,
        ignoreChars: '0o1il',
        background:'#58bc58',
        color:true,
        fontSize:50,
        height:54
   }

   // 验证码在这里生成
   const captcha = svgCaptcha.create(options);// {data:'<svg/>',text:'abcd'}

   console.log('vcode.session=',req.session);
   // 把验证码存入会话Session
   req.session.vcode = captcha.text.toLowerCase();
   
   res.send(formatData({data:captcha.data}));
})



module.exports = router;