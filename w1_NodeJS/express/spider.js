/**
 * 目标网址：http://store.lining.com/shop/goodsCate-sale,desc,1,15s15_122,15_122_m,15_122_ls15_122_10,15_122_10_m,15_122_10_l-0-0-15_122_10,15_122_10_m,15_122_10_l-0s0-0-0-min,max-0.html
 
 * 工具
    * request
    * cheerio
 */
const fs = require('fs');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');

// 1.获取目标html结构
const url = 'http://store.lining.com/shop/goodsCate-sale,desc,1,15s15_122,15_122_m,15_122_ls15_122_10,15_122_10_m,15_122_10_l-0-0-15_122_10,15_122_10_m,15_122_10_l-0s0-0-0-min,max-0.html';
request(url,(err,res,body)=>{
    let $ = cheerio.load(body);
    const goodslist = []
    $('.cate_search_content').find('.selItem').each((idx,el)=>{
        const $el = $(el);
        const name = $el.find('.hgoodsName').text();
        let price = $el.find('.price').text()
        price = price.match(/[\d\.]+/)[0]
        const imgurl = $el.find('.selMainPic img').attr('orginalsrc')
        

        // 2. 爬取图片到本地
        // request请求图片地址，返回一个数据流
        const filename = path.basename(imgurl);
        const fileStream = fs.createWriteStream('./img/'+filename);
        request(imgurl).pipe(fileStream);

        const goods = {
            name,
            price,
            imgurl:'img/'+filename
        }
        goodslist.push(goods);


    });
    console.log(goodslist);
})

