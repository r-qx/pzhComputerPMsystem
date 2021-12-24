<template>
  <div class="f-header">
    <div class="f-header__logo">
      <img src="~@/assets/logo.png" alt="" />
    </div>
    <div class="f-header__title">计算机实验室管理系统</div>
    <div class="f-header__nav" v-for="(item, index) in modules" :key="index">
      <i></i>
      <span>{{ item.name }}</span>
    </div>
    <div class="f-header__tool">
      <el-popover
        :title="`你好，管理员！`"
        ref="popover"
        placement="bottom"
        trigger="click"
      >
        <template #reference>
          <div class="user-info" v-popover:popover>
            <el-avatar
              shape="square"
              size="large"
              src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
            />
            <span class="user-name">管理员</span>
          </div>
        </template>
        <template #default>
          <ul class="user-tool">
            <li @click="onLogout">
              <i class="el-icon-switch-button"></i> 退出
            </li>
          </ul>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "FHeader",
  data() {
    return {
      modules: [
        {
          icon: "",
          name: "系统总览",
        },
        {
          icon: "",
          name: "教室管理",
        },
        {
          icon: "",
          name: "预约管理",
        },
        {
          icon: "",
          name: "实时监控",
        },
        {
          icon: "",
          name: "设备维护管理",
        },
        {
          icon: "",
          name: "系统设置",
        },
      ],
    };
  },
  methods: {
    onLogout() {
      this.$confirm("确定要退出当前用户？", "提示", {
        type: "warning",
      }).then(() => {
        this.$router
          .push({
            path: "/login",
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.f-header {
  height: 80px;
  background-image: url("~@/assets/header-bg.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  &__logo {
    margin-left: 20px;
    img {
      width: 250px;
    }
  }
  &__title {
    margin-left: 40px;
    color: #eff3f6;
    font-size: 24px;
    font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  &__nav {
    margin-left: 80px;
    color: rgba(255, 255, 255, 0.6);
  }
  &__tool {
    display: flex;
    justify-content: center;
    margin-left: 200px;
    color: rgba(255, 255, 255, 0.6);
    .user-info {
      display: flex;
      justify-content: center;
    }
    .user-name {
      margin-left: 20px;
      line-height: 44px;
    }
  }
}
</style>
