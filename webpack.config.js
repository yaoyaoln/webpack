const path = require('path')
// 在安装了插件后再导入包第二步(目的是把html文件也放到根目录的内存中，这样就可以自动引入内存中的bundle.js)
const htmlWebpackPlugin=require("html-webpack-plugin")
// 热更新第二步
const webpack=require('webpack')
// vue-loader在15+版本以后就要引入，并且要在plugins里面引用一下
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),//入口文件
    output: {//生成的文件
        filename: 'bundle.js',
        path: path.join(__dirname,'./dist')
    },
    devServer:{//配置devServer的第二种方法
        open:true,
        port:3001,
        contentBase:'src',//把根目录改成了src，所以生成的bundle.js文件就是放在改目录下的内存中，但是看不见
        hot:true//热更新第一步
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({//把html页面放到内存中去第三步,内存中bundle.js自动会引入内存中html页面
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()//vue-loader在15版本以上都要引用一下插件
    ],
    module:{
        //这里设置第三模块加载器，在引入文件后，再安装loader，最后匹配规则
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},//css文件
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//less文件
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//scss文件
            {test:/\.(jpg|png|gif|jpeg|bmp)$/,use:'url-loader'},//图片路径
            {test:/\.(ttf|eot|svg|woff2|woff)$/,use:'url-loader'},//字体图标
            //在安装babel的时候一定要区分版本，要么全部是7版本，要么全是
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}//vue-loader规则
            
            
        ]
    }
}
