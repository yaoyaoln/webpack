// 入口文件
import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'


// 在安装mint-ui后，全部导入mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
// 按需导入
import { Button} from 'mint-ui'
Vue.component(Button.name, Button)

// 把下载的mui的dist文件全部移到lib下面，再导入相对应的文件
import './lib/css/mui.min.css'
import './lib/js/mui.min.js'

import axios from 'axios'
Vue.prototype.$http = axios//这个样子每个vue实例都可以访问了
axios.defaults.baseURL='http://jsonplaceholder.typicode.com'//更改公共url
//在vue组件中调用: this.$http.get('/api', {})
var vm=new Vue({
    el:'.dv',
    data:{},
    methods:{},
    render:c=>c(app),//把导进来的组件模板自动渲染到页面中去
    router
})