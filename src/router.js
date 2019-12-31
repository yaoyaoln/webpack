import VueRouter from "vue-router"
// 导入对应组件模块
import register from './components/register.vue'
var router=new VueRouter({
    routes:[
        {path:'/count',component:register}
    ]
})

export default router//一定要导出才可以