<template>
  <div id="app">
    <router-view class="router-view" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang='scss'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .router-view {
    height: 100vh;
  }
}
</style>
