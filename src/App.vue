<template>
  <div id="app">
    <router-link></router-link>
    <login></login>
  </div>
</template>

<script>

import login from "./views/login/login"
export default {
  name: 'App',
  components: {
    login
  }
}
</script>

<style>
#app {
  height: 100%;
  min-width: 300px;
  overflow: hidden;
  background-color: #eff3f6;
}
</style>
