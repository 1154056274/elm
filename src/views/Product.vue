<template>
  <div  class='product'>
      <div class="content">
        <div id="leftTab">
          <ul>
            <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <div id="rightMain">
          right
        </div>
      </div> 

    <Foot class="foot"></Foot>
    
 
  </div>
</template>

<script>
import Foot from '../components/Foot'
export default {
  data () {
    return {
      list:[]
    }
  },
  methods: { // 方法
    getGoods(){
      this.$http.get('/goods').then(res=>{
        console.log(res.data.data)
        this.list = res.data.data
      })
    }
    },
  created () { // 实例被创建之后执行代码
  this.getGoods()
    },
  mounted () { // 页面进入时加载内容

    },
  components: { // 组件的引用
    Foot,
    },
  props: { // 父辈向子辈传参
  },
  watch: { // 监测变化

    },
  computed: { // 计算属性

    },
}
</script>
<style lang='scss' scoped >
.product{
  
  .content{
    display: flex;
    #leftTab{
      flex: 2;
      ul{
        li{
          display: flex;
          height: 56px;
        
         justify-content: center;
         align-items: center;
        }
      }
    }
    #rightMain{
      flex: 8;
    }
  }





  .foot{
     position: fixed;
    bottom: 0;
    width: 100%;
  }
  


  
}
</style>