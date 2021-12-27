<template>
  <dv-border-box-11 class="v-box" :style="boxStyle">
    <div class="v-box__bg">
      <div v-if="title" class="v-box__title">
        <span> {{ title }}</span>
        <div class="toolbar">
          <slot name="toolbar"></slot>
        </div>
      </div>
      <div class="v-box__content">
        <slot></slot>
      </div>
    </div>
  </dv-border-box-11>
</template>

<script>
export default {
  name: "vbox",
  props: {
    title: {
      type: String,
    },
    height: {
      type: String,
      default: null,
    },
    from: {
      type: String,
      default: "来源",
    },
    hiddenSpin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    boxStyle() {
      return this.height ? `height:${this.height}` : "flex:1";
    },
  },
};
</script>

<style lang="less" scoped>
.v-box {
  z-index: 100;
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 15px;
  &__bg {
    /*margin-bottom: 15px;*/
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 8px 10px;
    box-sizing: border-box;
  }
  &__title {
    height: 34px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    user-select: none;
    line-height: 34px;
    text-align: left;
    color: #fff;
    font-size: 18px;
    font-family: Microsoft YaHei;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    span {
      display: inline-block;
      text-align: left;
      white-space: nowrap;
      justify-content: center;
    }
    .toolbar {
      flex: 1;
      display: flex;
      padding-top: 4px;
      align-items: center;
      justify-content: flex-end;
    }
  }
  &__content {
    overflow: hidden;
    padding-top: 10px;
    flex: 1;
  }
}
</style>
