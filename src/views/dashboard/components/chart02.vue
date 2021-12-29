<template>
  <div class="chart02">
    <div class="chart02__title">
      计算机实验室设备现共有：<span> 1350台</span>
    </div>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "char02.vue",
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
        tooltip: {
          show: true,
        },
        xAxis: {
          name: "年",
          type: "category",
          boundaryGap: false,
          data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
          axisLabel: {
            color: "#fff",
          },
        },
        grid: {
          bottom: 30,
          top: 25,
          left: 30,
          right: 30,
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#fff",
          },
        },
        series: [
          {
            data: [320, 332, 501, 634, 990, 1330, 1350],
            type: "line",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(58,132,255, 0.5)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(58,132,255, 0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
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
.chart02 {
  padding: 0px 10px 10px;
  height: 200px;
  &__title {
    color: #eff3f6;
    span {
      font-size: 24px;
      color: #ffb877;
    }
  }
  .chart {
    height: 180px;
  }
}
</style>
