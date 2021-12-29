<template>
  <div class="chart01">
    <div class="chart01__left">
      <table>
        <tr>
          <th>使用中</th>
        </tr>
        <tr>
          <td>15间</td>
        </tr>
      </table>
    </div>
    <div class="chart01__right">
      <table>
        <tr>
          <th>空闲</th>
        </tr>
        <tr>
          <td>31间</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "char01.vue",
  watch: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.chart01 {
  display: flex;
  justify-content: center;
  height: 100%;
  text-align: center;
  &__left {
    width: 160px;
    height: 160px;
    background-image: url("./img/img.png");
    background-size: 100% 100%;

    table {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
      th {
        width: 160px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ddeaff;
      }
      td {
        width: 180px;
        font-size: 24px;
        font-family: DINCond-Black;
        font-weight: bold;
        color: #ffb877;
      }
    }
  }
  &__right {
    margin-left: 20px;
    width: 160px;
    height: 160px;
    background-image: url("./img/img_1.png");
    background-size: 100% 100%;
    table {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
      th {
        width: 160px;
        height: 16px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ddeaff;
      }
      td {
        width: 160px;
        height: 18px;
        font-size: 24px;
        font-family: DINCond-Black;
        font-weight: bold;
        color: #b0ff8c;
      }
    }
  }
}
</style>
