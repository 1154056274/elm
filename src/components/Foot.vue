<template>
  <div class="foot">
    <div class="left">
      <div id="outer">
        <svg class="icon gwc" aria-hidden="true">
          <use xlink:href="#icon-qicheqianlian-select"></use>
        </svg>
      </div>
      <div class="price">￥0</div>
      <span>另需配送费￥4元</span>
    </div>
    <div class="right">￥20元起送</div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {
    // 方法
   
  },
  created() {
     
    // 实例被创建之后执行代码
  },
  mounted() {
    // 页面进入时加载内容
  },
  components: {
    // 组件的引用
  },
  props: {
    // 父辈向子辈传参
  },
  watch: {
    // 监测变化
  },
  computed: {
    // 计算属性
  },
};
</script>
<style lang='scss' scoped >
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.foot {
  display: flex;
  height: 56px;
    line-height: 56px;
  .left {
      font-size: 12px;
      display: flex;
    color: #999;
    position: relative;
    flex: 7;
    background: #07111b;
    #outer {
      top: -10px;
      left: 20px;
      position: absolute;
      width: 50px;
      height: 50px;
      background: #07111b;
      border-radius: 50%;
      .gwc {
        font-size: 40px;
      }
    }
    .price{
        margin-left: 70px;
        margin-right: 20px;
    }
  }

  .right {
      text-align: center;
      font-size: 12px;
      color: #999;
    flex: 3;
    // background: #00b43c;
    background: #333;
  }
}
</style>