<template>
  <div id="app">
    <div id="header">
          <Header />
    </div>
    <div id="content">
        <Content />
    <router-view></router-view>
    </div>
   
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'


export default {
  name: 'App',
  components: {
  Header,
  Content,
  }
}
</script>

<style>
html,body{
  height: 100%;
}
body{
  display: flex;
  flex-direction: column;
}



</style>
