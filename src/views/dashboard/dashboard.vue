<template>
  <div class="dashboard">
    <div class="left">
      <box title="教室总览">
        <Chart01></Chart01>
      </box>

      <box title="设备总览">
        <Chart02></Chart02>
      </box>
      <box title="维修总览">
        <Chart03></Chart03>
      </box>
    </div>
    <div class="middle">
      <c-map></c-map>
    </div>
    <div class="right">
      <box title="预约管理">
        <Chart04></Chart04>
      </box>
      <box title="用户列表">
        <Chart05></Chart05>
      </box>
      <box title="设备总览">
        <Chart06></Chart06>
      </box>
    </div>
  </div>
</template>

<script>
import Chart01 from "@/views/dashboard/components/chart01";
import Chart02 from "@/views/dashboard/components/chart02";
import Chart03 from "@/views/dashboard/components/chart03";
import Chart04 from "@/views/dashboard/components/chart04";
import Chart05 from "@/views/dashboard/components/chart05";
import Chart06 from "@/views/dashboard/components/chart06";
import cMap from "@/views/dashboard/components/map";
import box from "@/components/box/box";
export default {
  name: "dashboard",
  components: {
    Chart06,
    Chart05,
    Chart04,
    Chart03,
    Chart01,
    Chart02,
    cMap,
    box,
  },
};
</script>

<style lang="less" scoped>
.dashboard {
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url("~@/assets/img.png");
  background-size: 100% 100%;
  .left {
    left: 0;
    width: 25%;
    top: 0;
    bottom: 0px;
    position: absolute;
    padding: 15px 15px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .middle {
    position: absolute;
    left: 28%;
    top: 2%;
    bottom: 2%;
    right: 28%;
  }
  .right {
    right: 0;
    width: 25%;
    top: 0;
    bottom: 0px;
    position: absolute;
    padding: 15px 15px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
}
</style>
