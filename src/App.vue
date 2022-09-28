<template>
  <div id="app">
    <topbar class=""/>
    <mainhead class=""/>

    <router-view></router-view>
    <mainfooter class=""/>
  </div>
</template>

<script>
import topbar from './components/topbar.vue'
import mainhead from './components/header.vue'
import mainfooter from './components/footer.vue'
export default {
  name: 'App',
  components: {
    topbar,
    mainhead,
    mainfooter
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}

</style>
