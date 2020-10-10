<template>
  <div id="app">
    <div id="header" v-if='$route.meta.header'>
      <Header />
        
    </div>
    <div id="content" v-if='$route.meta.content'>
    <Content />
    </div>
      <transition name="transitionRouter" >
    <router-view id="main"></router-view>
      </transition>
  </div>
</template>

<script>

import Header from "./components/Header";
import Content from "./components/Content";


export default {
  name: "App",
  components: {
    Header,
    Content,
 
  },
};



</script>

<style>
.transitionRouter-enter-active,
.transitionRouter-leave-active {
    transition: all 0.4s;
}

.transitionRouter-enter,
.transitionRouter-leave{
    transform: translate3d(100%, 0, 0);
}

</style>
