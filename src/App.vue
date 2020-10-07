<template>
  <div id="app">
    <div id="header">
      <Header />
        
    </div>
    <div id="content">
    <Content />
    </div>
    <router-view id="main"></router-view>
 
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


</style>
