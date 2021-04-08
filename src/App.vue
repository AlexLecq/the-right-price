<template>
  <div id="app">
    <Config  @emitConfig="setConfig"></Config>
  </div>
</template>

<script>
import Config from './components/Config/Config.vue'
export default {
  name: 'App',
  components: {
    Config
  }
}
</script>

<style>
#app {
  display: flex;
  flex-flow: row nowrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
