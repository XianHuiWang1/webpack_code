/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-03 23:38:08
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-04 13:02:10
 * @FilePath: /webpack_learing/webpack_code/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path=require('path')
module.exports={
    //入口
    entry:'./src/main.js',//相对路径
    //输出
    output:{
        //文件的输出路径
        //__dirname是nodejs的变量,代表当前文件的文件夹目录
        path:path.resolve(__dirname,'../dist'),//绝对路径
        //文件名
        filename:'static/js/main.js',
        //自动清空上次打包的内容
        //原理在打包前,将path整个目录清空,在运行打包
        clean:true
    },
    //加载器
    module:{
        rules:[
            //loader的配置
            {
                test: /\.css$/,//只检测.css文件
                use: [ //执行顺序从右到左,从下到上
                    MiniCssExtractPlugin.loader, //将js中的css通过创建style标签添加到html文件中生效
                    'css-loader' ,//将css资源编译成commonjs的模块到js中
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              "postcss-preset-env", // 能解决大多数样式兼容性问题
                            ],
                          },
                        },
                      },
                ]
            },
            {
                test:/\.(PNG|jpe?g|gif|webp|svg)$/,
                type:'asset',
                parser:{
                    dataUrlCondition: {
                        //小于10kb的图片转base64
                        //优点:减少请求数量,缺点:体积会更大
                        maxSize:10*1024
                    }
                },
                generator: {
                    //输出图片名称
                    filename: 'static/images/[hash:10][ext][query]'
                }

            },
            {
                test:/\.(ttf|woff2?|mp3|mp4|avi)$/,
                type:'asset/resource',
                generator: {
                    //输出图片名称
                    filename: 'static/images/[hash:10][ext][query]'
                }

            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,//排除node_modules中的js文件（这些文件不处理）
                use: {
                  loader: 'babel-loader',
                //   options: {
                //     presets: ['@babel/preset-env']
                //   }
                }
            }
        ]
    },
    //插件
    plugins:[
        //plugin的配置
        new ESLintPlugin({
            context: path.resolve(__dirname, "../src")
        }),
        new HtmlWebpackPlugin({
            //模板，以public/index.html文件创建新的html文件
            //新的html文件特点：1.结构和原来一致2.自动引入打包输出的资源
            template:path.resolve(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename:"static/css/main.css"
        }),
        new CssMinimizerPlugin()
    ],
    //模式
    mode:'production'
}