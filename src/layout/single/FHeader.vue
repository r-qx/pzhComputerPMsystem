<template>
  <div class="f-header">
    <div class="f-header__logo">
      <img src="~@/assets/logo.png" alt="" />
    </div>
    <div class="f-header__title">计算机实验室管理系统</div>
    <div
      class="f-header__nav"
      v-for="(item, index) in modules"
      :key="index"
      :class="{ active: enter === index }"
      @click="onSelect(index, item.path)"
    >
      <i :class="['iconfont', item.icon]"></i>
      <span> {{ item.name }}</span>
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
      enter: 0,
      modules: [
        {
          icon: "",
          name: "系统总览",
          path: "/dashboard",
        },
        {
          icon: "",
          name: "教室管理",
          path: "/class",
        },
        {
          icon: "",
          name: "预约管理",
          path: "/forward",
        },
        {
          icon: "",
          name: "用户管理",
          path: "/user",
        },
        {
          icon: "",
          name: "设备维护管理",
          path: "/device",
        },
        {
          icon: "",
          name: "系统设置",
          path: "/setting",
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
    onSelect(index, path) {
      this.enter = index;
      this.$router
        .push({
          path: path,
        })
        .catch((err) => {
          console.log(err);
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
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    margin-left: 40px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  &__nav:hover {
    color: #fff;
    background: linear-gradient(
      180deg,
      rgba(1, 82, 217, 0.2) 0%,
      rgba(1, 82, 217, 0.2) 100%
    );
  }
  &__nav.active {
    background: linear-gradient(180deg, #0152d9 0%, rgba(1, 82, 217, 0) 100%);
    color: #fff;
  }

  &__tool {
    display: flex;
    justify-content: center;
    margin-left: 240px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.6);
    .user-info {
      list-style: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
    }
    .user-name {
      cursor: pointer;
      margin-left: 20px;
      line-height: 44px;
    }
  }
}
.user-tool {
  cursor: pointer;
  list-style: none;
  margin: 0;
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(1, 82, 217, 0.2) 0%,
      rgba(1, 82, 217, 0.2) 100%
    );
  }
}
</style>
