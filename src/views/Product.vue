<template>
  <div class="product">
    <div class="content">
      <div id="leftTab">
        <ul id="left">
          <li v-for="(item, index) in list" :key="index" @click="change(index)" :class="{'active':flag==index}">{{ item.name }}</li>
        </ul>
      </div>
      <div id="rightMain">
        <h3 >热销榜</h3>
        <ul>
          <li v-for="(items,index) in list" :key="index">
            <div v-for="(item,index) in items.foods" :key="index">
            <div class="zp"><img :src="item.image"></div>
            <div class="js">
              <p>{{item.name}}</p>
              <p class="dec">{{item.description}}</p>
              <div><span>月售{{item.sellCount}}份</span>&nbsp;&nbsp;<span>好评率{{item.rating}}%</span></div>
              <p class="pri">￥{{item.price}}</p>
            </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <Foot class="foot"></Foot>
  </div>
</template>

<script>
// import $ from 'jquery'
import Foot from "../components/Foot";



export default {
  data() {
    return {
      list: [],
      flag:1
    };
  },
  methods: {
    // 方法
    getGoods() {
      this.$http.get("/goods").then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
    },

    change(index){
      this.flag = index
      

    }
  },
  created() {
    // 实例被创建之后执行代码
    this.getGoods();
   
  },
  mounted() {

    
    // 页面进入时加载内容
  },
  components: {
    // 组件的引用
    Foot,
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
.product {
  height: 435px;
  overflow: hidden;
  .content {
    overflow: hidden;
    display: flex;
    height: 435px;
    #leftTab {
      // height: 504px;
      overflow-y: auto;
      flex: 2;
      ul {
        li {
          font-size: 10px;
          text-align: center;
          display: flex;
          height: 56px;
          color: #666;
          justify-content: center;
          align-items: center;
          background: #f3f5f7;
          &.active{
            background: white;
          }
        }
      }
    }
    #rightMain {
      overflow-y: auto;
      flex: 8;
      overflow-x: hidden;

      h3 {
        width: 100%;
        height: 26px;
        line-height: 26px;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color: #666;
        background: #f3f5f7;
      }
     ul{
      //  transform: translateY(-100px);
      //  transition: all 2s;
       li{
         .zp{
           float: left;
           width: 57px;
           height: 43px;
           margin-left: 20px;
           margin-top: 20px;
           img{
             width: 100%;
             height: 100%;
           }
         }
         .js{
           float: left;
           margin-top: 20px;
           margin-left: 10px;
           .dec{
             width: 170px;
             overflow-x: hidden;
           }
           p{
             line-height: 1.5;
           }
          .pri{
            color: red;
          }
           
         }
       }
     }
    }
  }
  .foot{
    position: fixed;
    width: 100%;
  }
  

}
</style>