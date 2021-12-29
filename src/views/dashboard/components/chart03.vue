<template>
  <div class="chart03">
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "char03.vue",
  watch: {
    winWidth() {
      if (this.chart) {
        this.$nextTick(() => {
          this.chart.resize();
        });
      }
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  methods: {
    renderChart() {
      if (!this.chart) return;
      const option = {
        grid: {
          top: 30,
          left: 30,
          right: 30,
          bottom: 30,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            barWidth: "40%",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
          {
            name: "Direct",
            type: "bar",
            barWidth: "40%",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };
      this.chart.setOption(option);
    },
    initChart() {
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs.chart);
        this.renderChart();
      });
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style lang="less" scoped>
.chart03 {
  .chart {
    height: 200px;
  }
}
</style>
