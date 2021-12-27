<template>
  <div class="dashboard">
    <div class="left">
      <Chart01></Chart01>
      <Chart02></Chart02>
      <Chart03></Chart03>
    </div>
    <div class="middle">
      <c-map></c-map>
    </div>
    <div class="right">
      <Chart04></Chart04>
      <Chart05></Chart05>
      <Chart06></Chart06>
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
  },
};
</script>

<style scoped></style>
