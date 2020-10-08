<template>
  <div class="product">
    <div class="content">
      <div id="leftTab" ref="left">
        <ul id="left">
          <li
            v-for="(item, index) in list"
            :key="index"
            @click="selectItem(index, $event)"
            :class="{ active: currentIndex === index }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div id="rightMain" ref="right">
        <ul id="rightUl">
          <li v-for="(items, index) in list" :key="index" class="rightItem">
            <h3>{{ items.name }}</h3>
            <div v-for="(item, index) in items.foods" :key="index" class="box">
              <div class="zp"><img :src="item.image" /></div>
              <div class="js">
                <p>{{ item.name }}</p>
                <p class="dec">{{ item.description }}</p>
                <div>
                  <span>月售{{ item.sellCount }}份</span>&nbsp;&nbsp;<span
                    >好评率{{ item.rating }}%</span
                  >
                </div>
                <p class="pri">￥{{ item.price }}</p>
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
import BScroll from "better-scroll";

export default {
  data() {
    return {
      list: [],
      flag: 1,
      scrollY: 0,
      clickEvent: false,
      listHeight: [],
    };
  },
  methods: {
    // 方法
    getGoods() {
      this.$http.get("/goods").then((res) => {
        this.list = res.data.data;
      });
    },

    initScroll() {
      (this.lefts = new BScroll(this.$refs.left, {
        click: true,
      })),
        (this.rights = new BScroll(this.$refs.right, {
          probeType: 3,
        })),
        this.rights.on("scroll", (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
    },
    getHeight() {
      let rightItems = document.getElementsByClassName("rightItem");
      //  var arr = Array.prototype.slice.call(rightItems)
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },

    selectItem(index, event) {
      this.clickEvent = true;
      //在better-scroll的派发事件的event和普通浏览器的点击事件event有个属性区别_constructed
      //浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性的时候return掉
      if (!event._constructed) {
        return;
      } else {
        let rightItems = this.$refs.right.getElementsByClassName("rightItem");

        let el = rightItems[index];
        this.rights.scrollToElement(el, 300);
      }
    },
  },
  created() {
    // 实例被创建之后执行代码
    this.getGoods();
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.initScroll();
        this.getHeight();
      }, 500);
    });

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
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
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
          &.active {
            background: white;
          }
        }
      }
    }
    #rightMain {
    
      flex: 8;
      overflow-x: hidden;

      ul {
        li {
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
          .box {
            height: 110px;
          }
          .zp {
            float: left;
            width: 57px;
            height: 43px;
            margin-left: 20px;
            margin-top: 20px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .js {
            float: left;
            margin-top: 20px;
            margin-left: 10px;
            .dec {
              width: 170px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow-x: hidden;
            }
            p {
              line-height: 1.5;
            }
            .pri {
              color: red;
            }
          }
        }
      }
    }
  }
  .foot {
    position: fixed;
    width: 100%;
  }
}
</style>