import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter); // 注册vue-router

const router = new VueRouter({
  //配置路由和组件之间关系
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login"),
    },
    {
      path: "/dashboard",
      alias: "/",
      meta: {
        title: "系统总览",
      },
      component: () => import("@/layout/single"),
      children: [
        {
          path: "",
          name: "dashboard",
          meta: {
            title: "系统总览",
          },
          component: () => import("@/views/dashboard/dashboard"),
        },
      ],
    },
    {
      path: "/class",
      meta: {
        title: "教室管理",
      },
      component: () => import("@/layout/single"),
      children: [
        {
          path: "",
          name: "device",
          meta: {
            title: "教室管理",
          },
          component: () => import("@/views/class/class"),
        },
      ],
    },
    {
      path: "/forward",
      meta: {
        title: "预约管理",
      },
      component: () => import("@/layout/single"),
      children: [
        {
          path: "",
          name: "forward",
          meta: {
            title: "预约管理",
          },
          component: () => import("@/views/forward/forward"),
        },
      ],
    },
    {
      path: "/user",
      meta: {
        title: "用户管理",
      },
      component: () => import("@/layout/single"),
      children: [
        {
          path: "",
          name: "device",
          meta: {
            title: "用户管理",
          },
          component: () => import("@/views/user/user"),
        },
      ],
    },
    {
      path: "/device",
      meta: {
        title: "设备维护管理",
      },
      component: () => import("@/layout/single"),
      children: [
        {
          path: "",
          name: "device",
          meta: {
            title: "设备维护管理",
          },
          component: () => import("@/views/device/device"),
        },
      ],
    },
    {
      path: "/setting",
      meta: {
        title: "教师管理",
      },
      component: () => import("@/layout/single"),
      children: [
        {
          path: "",
          name: "device",
          meta: {
            title: "教室管理",
          },
          component: () => import("@/views/setting/setting"),
        },
      ],
    },
  ],
});

export default router; //导出
