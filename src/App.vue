<template>
  <div id="app">

    <!-- NORMAL USERS LAYOUT -->
    <div v-if="!this.$route.meta.layout" class="main">
      <topbar class="" />
      <mainhead class="" />
      <div class="mt-5 mb-5">
        <router-view></router-view>
      </div>
      <mainfooter class="" />
    </div>

    <!-- ADMIN USER LAYOUT -->
    <div v-if="this.$route.meta.layout" class="admin-main">
      <topbar class="" />
      <div class="">
        <router-view></router-view>
      </div>
      <adminfooter class="" />
    </div>

  </div>
</template>

<script>
import topbar from './components/topbar.vue'
import mainhead from './components/header.vue'
import mainfooter from './components/footer.vue'
import adminfooter from './components/admin-footer.vue'
export default {
  name: 'App',
  components: {
    topbar,
    mainhead,
    mainfooter,
    adminfooter
  },
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
