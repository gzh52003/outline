const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 入口
    entry:{
        main:path.join(__dirname,'./src/main.js'),
    },

    // 出口配置
    output:{
        // 打包后文件保存路径
        path:path.join(__dirname,'dist'),
        filename: "js/[name]-[hash:5]-bundle.js"//打包后输出的文件名
    },

    // 服务器
    devServer:{
        contentBase:path.join(__dirname,'./public'),
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

    resolve:{
        alias:{
            '@': path.join(__dirname,'src'),
            '#': path.join(__dirname,'src/components'),
            '~': path.join(__dirname,'src/views')
        }
    },

    // 加载器
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:path.resolve(__dirname,'./node_modules'),
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        // 插件
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy: true}],
                            ['@babel/plugin-proposal-class-properties',{ "loose": true }],
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }],
                        ]
                    }
                }]
            },

            // css loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

             // sass loader
             {
                test:/\.s[ac]ss$/,

                // 增加编译速度
                // include:'./src',
                // exclude:'./node_modules',
                use:['style-loader','css-loader','sass-loader']
            },
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./public/template.html'),
            title:'H5面试宝典'
        }),
        // new HtmlWebpackPlugin({
        //     filename:'login.html',
        //     template:path.join(__dirname,'./public/template.html'),
        //     title:'登录'
        // })
        new CleanWebpackPlugin(),
    ]
}