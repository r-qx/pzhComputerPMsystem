<template>
  <dv-border-box-8 :reverse="true" :dur="10"
    ><div id="map"></div
  ></dv-border-box-8>
</template>

<script>
export default {
  name: "map",
  data() {
    return {};
  },
  methods: {
    init() {},
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="less" scoped>
#map {
  position: absolute;
  left: 8px;
  top: 8px;
  height: 98%;
  width: 98%;
  background-image: url("./img/img_2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
