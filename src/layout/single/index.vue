<template>
  <div class="layout">
    <f-header></f-header>
    <div class="lay_body">
      <f-nav></f-nav>
      <div class="lay__main">
        <f-tab></f-tab>
        <div class="lay__content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
    <f-footer></f-footer>
  </div>
</template>

<script>
import FFooter from "@/layout/single/FFooter";
import FHeader from "@/layout/single/FHeader";
import FNav from "@/layout/single/FNav";
import FTab from "@/layout/single/FTab";
export default {
  name: "index",
  components:{
    FFooter,
    FHeader,
    FNav,
    FTab
  }
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  .lay-body {
    overflow: hidden;
    flex: 1;
    display: flex;
    .lay-main {
      flex: 1;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .lay-content{
        flex: 1;
        overflow: hidden;
        overflow-y: auto;
        background-color: #eff3f6;
        position: relative;
      }
    }
  }
}
</style>