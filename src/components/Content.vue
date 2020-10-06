<template>
  <div  class='contentTab'>
      <ul>
      
            <router-link tag="li" to="/product">商品</router-link>
            <router-link tag="li" to="/comment">评论</router-link>
            <router-link tag="li" to="/sell">商家</router-link>
            
      </ul>
  
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: { // 方法

    },
  created () { // 实例被创建之后执行代码

    },
  mounted () { // 页面进入时加载内容

    },
  components: { // 组件的引用

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
.contentTab{
    ul{
        display: flex;
        justify-content: space-around;
        li{
            color: #666;
            height: 36px;
            line-height: 36px;
          &.active{
              color: red;
                border-bottom: 2px solid red;
          }
        }
    }
}
</style>