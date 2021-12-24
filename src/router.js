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
            path: '/dashboard',
            alias:"/",
            meta:{
              title:"系统总览"
            },
            component: ()=>import('@/layout/single'),
            children:[
                {
                    path:"",
                    name:"dashboard",
                    meta:{
                        title:"系统总览"
                    },
                    component:()=>import('@/views/dashboard/dashboard')
                }
            ]
        },
        {
            path: '/device',
            meta:{
                title:"设备总览"
            },
            component: ()=>import('@/layout/single'),
            children:[
                {
                    path:"",
                    name:"device",
                    meta:{
                        title:"设备总览"
                    },
                    component:()=>import('@/views/device/device')
                }
            ]
        },
        ]
});

export default router;//导出