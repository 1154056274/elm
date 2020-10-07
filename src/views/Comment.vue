<template>
  <div class="comment">
    <div id="top">
      <div class="left-star">
        <h2>4.2</h2>
        <p>综合评分</p>
        <p>高于周边商家69.2%</p>
      </div>
      <div class="right-star">
        <div class="star">
          <p>服务态度</p>
          <div>
            <span class="on"></span>
            <span class="on"></span>
            <span class="on"></span>
            <span class="on"></span>
            <span class="off"></span>
          </div>
          <span class="grade">4.1</span>
        </div>
        <div class="star">
          <p>商品评分</p>
          <div>
            <span class="on"></span>
            <span class="on"></span>
            <span class="on"></span>
            <span class="on"></span>
            <span class="off"></span>
          </div>
          <span class="grade">4.3</span>
        </div>
        <div class="time"><span>送达时间</span><span>38分钟</span></div>
      </div>
    </div>
    <div class="kb"></div>
    

    <div class="main">
        <div id="sec">
          <router-link tag="p" to="/comment/all">全部 24</router-link>
          <router-link tag="p" to="/comment/true">满意 16</router-link>
          <router-link tag="p" to="/comment/false">不满意 8</router-link>
        </div>
       </div>
       <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag:1
    };
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
.comment {
  height: 490px;
  overflow-y: auto;
  #top {
    overflow: hidden;

    .left-star {
      padding: 18px 0;
      float: left;
      width: 138px;
      height: 80px;
      text-align: center;
      h2 {
        margin-bottom: 6px;
        line-height: 28px;
        font-size: 24px;
        color: #fc9153;
      }
      p:nth-child(2) {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: 12px;
        color: #333;
      }
      p:nth-child(3) {
        font-size: 10px;
        color: #999;
      }
    }
    .right-star {
      margin-top: 10px;
      border-left: 1px solid #cecece;
      padding: 5px 0 6px 24px;
      float: left;
      .grade {
        color: #fc9153;
      }
      .star {
        line-height: 25px;
        p {
          font-size: 12px;
          color: #333;
          float: left;
          margin-right: 10px;
        }
        > div {
          float: left;
          span {
            width: 15px;
            height: 15px;
            margin-right: 6px;
            background-size: 15px 15px;
            background-repeat: no-repeat;
          }
          .on {
            display: inline-block;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkRGNzA2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkRGNzE2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NEY2REY2RTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NEY2REY2RjZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpQH5+oAAAHMSURBVHjaxJe/TgJBEMY5pVBrQAspiVpoAY2CxEJ7CxJDZbkJBVpowxvYQGJiI6WNIYRXIDERHsCOQKGxIIJUFKhB1283gyHk0Lu5O5zkxy7772N2Z+cOQ177uLanP4W840z2+/h2QiVLeI4pGgaHmqIRnqVwBswTGc4CBuOMF8AzCND3V70DQr557XF6TNRH9fQstjprsc1V4TiImrRHEWRxL4WzzD5HwhGQ+qU/Ba8jdqJ6G2UILIMg1UNUH7UF6epYsU/QJV6o7BCjto6fksENXRM3TP3AFWLTpF9du2O11WVwAHo+762ntYQsj864BnZAy0PRltYQsjYZXE26LnUPROt6bSGb06K6S9tecVG0Qtvb/es6DcARyLsgmtdrCTmw+jz+AufgEVwyEo2afwrBK24CKYIPhqfvNJeduaLM+704JadbFk46ON9dJ8IJB8KJ/xJme7w+8aYxbg90DEmqm1kAT6s1jrCZt31wBmLgnohRW9+O13M2tqoElAcFMPxpFXIICtRXsnpUVjxugH16oWtPHS1kG6RpbIPrsXoBWAU5sAWqlkNKyCrNyek1ikbIzl8YlQA2wBMrnoVU2e4Corcol8yGfAswAGyVaSErvYjsAAAAAElFTkSuQmCC);
          }
          .off {
            display: inline-block;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkMwOTcxNjk2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkMwOTcxNkE2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQzA5NzE2NzZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQzA5NzE2ODZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr/SWFMAAAG/SURBVHjaxJY/S8NAGIcbGyG1hXYIJt0sLqVkc1Jc/BSuTp38NrroorOItEK3iouoCIIURQdtt1qXYlU0YKv+XnkLIVza5JK0B08vufTyvPc/ytbOXkIy5elns7zxLFNZTcgni3Mp8YykNAMWiO3d/cwkxSWgMKVJiZOg6LgvotXJSYgXgea417gsdrHlsyxSsQF0QbmO7jbiFFuSz0KJs6Aw4nkBrc4G2UDmQcqFJrhWfDRiHfJf5F/A5tx9/Y/Km8EaL5MoEgU4x4jSAJxSlE1Q46jiTuSoYX9vDse4A6rgLUYpvbsKacc9uXqgAl5ikNI7K5D2vGa1zd3eilDa4u61xy2nPqiDRgRSekcd0r7f85iWxCV4Bys+lpKo/jmEd7IbyD34kWjpgOtK71y65PpWPfZ03+J8iPE1w4iNaYnNaYhzri8NZ+qCY6br8R8NB0ZO5vNWFPE3uAa3jtl+xGfxEpgVvOM1rPgJXIBPZyHWKgXQQOsekS+7vr9ojjwEFQ8nFkV8BtqjxgwBUEAnCIDW7yoPlRl0jOngT4MrcDhO6gqgzXWobhqBpIK0mMoPwIfMdObuv+HuFzr+BBgA06Z0wbQa03AAAAAASUVORK5CYII=);
          }
        }
      }
      .time {
        span {
          font-size: 10px;
          margin-right: 10px;
          &:nth-child(2) {
            line-height: 25px;
            color: #999;
          }
        }
      }
    }
  }
  .kb {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7;
  }
  .main{
    #sec{
      height:120px ;
      p:nth-child(1){
        margin-left: 10px;
          background: #00a0dc;
          color: white;
      }
       p:nth-child(2){
          background: rgba(0,160,220,0.2);
          color:#666;
      }
          p:nth-child(3){
          background: #ccc;
          color:#666;
        }
      p{
        &.active{
          background: tomato;;
        }
        float: left;
           padding: 8px 12px;
          margin-right: 8px;
          line-height: 16px;
          border-radius: 1px;
          font-size: 12px;
          margin-top: 15px;
      }
      
    }
  }
}
</style>