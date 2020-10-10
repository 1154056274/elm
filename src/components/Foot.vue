<template>
  <div class="foot">
    <div class="left">
      <div id="outer">
        <div id="circle" v-if="allNum > 0">{{ allNum }}</div>
        <svg class="icon gwc" aria-hidden="true">
          <use xlink:href="#icon-qicheqianlian-select"></use>
        </svg>
      </div>
      <div id="price" :class="{ white: allPrice > 0 }">￥{{ allPrice }}</div>
      <span>另需配送费￥4元</span>
    </div>
    <div class="right" :class="{ on: flag }" @click="pay">{{ content }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);
export default {
  data() {
    return {
      flag: false,
      content: "￥20元起送",
      show: "",
    };
  },
  methods: {
    // 方法
    pay() {
      if (this.flag) {
        Dialog.alert({
          message: "您应该支付" + this.content,
        }).then(() => {});
      }
    },
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
  props: ["allPrice", "allNum"],
  // 父辈向子辈传参

  watch: {
    // 监测变化
    allPrice: function (newl, old) {
      console.log(newl, old);
      if (newl >= 20) {
        this.flag = true;
        this.content = this.allPrice + 4 + "元";
      } else {
        this.flag = false;
        this.content = "￥20元起送";
      }
      console.log(this.flag);
    },
  },
  computed: {
    // 计算属性
  },
};
</script>
<style lang='scss' scoped >
.on {
  background-color: #00b43c !important;
  color: white !important;
}
.white {
  color: white !important;
}
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
      #circle {
        width: 20px;
        height: 20px;
        background: red;
        color: white;
        border-radius: 50%;
        position: absolute;
        left: 30px;
        line-height: 20px;
        text-align: center;
      }
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
    #price {
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