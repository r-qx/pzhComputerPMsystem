import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // 注册vue-router

const router = new VueRouter({
    //mode: 'history',
    //base: '/Page/',
    routes: [
        {
            path: '/',
            name: 'Login',
            redirect:'./views/login/login.vue'
        },
        {
            path: '/Home',
            name: 'Home',
            component: (resolve) => require(['@/views/home/home'], resolve),
            meta: { requireAuth: false },
            //children: [{ path: '/Home/Material', component: (resolve) => require(['@/views/Material.vue'], resolve) },]
        }]
});

export default router;//输出定义router参数啥的