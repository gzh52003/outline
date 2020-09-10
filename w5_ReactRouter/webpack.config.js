const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry:path.join(__dirname,'./src/main.js'),

    // 服务器
    devServer:{
        contentBase:path.join(__dirname,'./public'),
        port:20030,
        // open:true,
        compress:true,
        host:'0.0.0.0',// 允许外部访问
        historyApiFallback:true,
        // proxy:{
        //     '/nsg':{
        //         target:
        //     }
        // }
    },

    // 加载器
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        // 插件
                        plugins:['@babel/plugin-proposal-class-properties']
                    }
                }]
            },

            // css loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./public/template.html')
        })
    ]
}