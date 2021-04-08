<template>
  <div id="app">
    <Menu v-if="!gameCurrent">
      <b-menu-list label="Configuration Game">
        <Config @emitConfig="setConfig"></Config>
      </b-menu-list>
      <hr />
    </Menu>
    <Game v-if="config" @endGame="setGameCurrent" :config="config"></Game>
  </div>
</template>

<script>
import Config from "./components/Config/Config.vue";
import Game from "./components/Game/Game.vue";
import Menu from "./components/Menu/Menu.vue";

export default {
  data: function () {
    return {
      config: null,
      gameCurrent: false
    }
  },
  name: "App",
  components: {
    Config,
    Game,
    Menu
  },
  methods: {
    setConfig: function (config) {
      this.config = config;
      this.gameCurrent = true;
    },
    setGameCurrent: function () {
      this.gameCurrent = false;
    }
  },
};
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
