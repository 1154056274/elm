<template>
  <div  class='detail'>
      detail
  </div>
</template>

<script>
export default {
  data () {
    return {
        list:[],
        id:'',
        perList:''
    }
  },
  methods: { // 方法
   getGoods() {
      this.$http.get("/goods").then((res) => {
        var id = 1000;
        res.data.data.forEach((items) => {
          items.foods.forEach((item) => {
            id++;
            item.num = 0;
            item.id = id;
          });
        });
        this.list = res.data.data;
     
      });
    },
    getList(){
        this.list.forEach((items) => {
          items.foods.forEach((item) => {
            if(this.id == item.id){
                this.perList = item
                console.log(this.perList)
            }
          });
        });
    }
      
    },
  created () { // 实例被创建之后执行代码
      this.id = this.$route.query.id
        this.getGoods()
     
          setTimeout(()=>{
                 this.getList()
          },500)
           
    
     
     
 

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
</style>