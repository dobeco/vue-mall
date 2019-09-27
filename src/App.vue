<template>
  <div id="app">

   
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
 
    
    
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'


export default {
  name: 'app',
  components: {
    MainTabBar


  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
.router-link-active {
  color: aqua
 
}
.exact-active-class {
  color: #ff6600;
}

</style>
