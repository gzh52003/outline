const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// 返回一个commonJS模块
module.exports = {
    // 入口：webpack从这里开始分析和编译文件
    entry:path.join(__dirname,'./src/main.js'),

    // 本地服务器：webpack-dev-server
    devServer:{
        // 设置服务器根目录（网站根目录）
        contentBase:path.join(__dirname,'./public'),
        // port:3000
    },

    // 加载器loader
    // 每一类文件应该有一个加载器，用于解析这类文件
    module:{
        rules:[
            // 配置js加载器（ babel-loader），解析js规则
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',

                    // babel-loader的参数
                    options:{
                        // 插件集合
                        presets:['@babel/preset-react'],

                        // 插件
                        plugins:['@babel/plugin-proposal-class-properties']
                    },

                }]
            }
        ]
    },

    // webpack插件
    plugins:[
        // HtmlWebpackPlugin插件作用：生成一个index.html文件
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./public/index.html')
        })
    ]
}