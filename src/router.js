import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter) // 注册vue-router

const router = new VueRouter({
    //配置路由和组件之间关系
    mode:'history',
    routes: [
        {
          path:'/',
          redirect:"/login"
        },
        {
            path: '/login',
            name: 'login',
            component:()=>import('@/views/login/login')
        },
        {
            path: '/home',
            name: 'home',
            component: ()=>import('@/views/home/home'),
            //children: [{ path: '/Home/Material', component: (resolve) => require(['@/views/Material.vue'], resolve) },]
        },

        ]
});

export default router;//导出