<template>
  <div class="game">
    <div class="inline" v-if="config.mode === $modes.timer">
      <h4 class="subtitle is-4">Time remaining:</h4>
      <h4 class="subtitle is-4" id="time"></h4>
    </div>
    <h4 v-else-if="config.mode === $modes.hit" class="subtitle is-4" id="hitMax">
      Attempt remain: {{ config.hitMax - hitPlayer }}
    </h4>
    <b-tag v-if="isWin !== -3" type="is-danger" style="margin-bottom: 1em;" size="is-medium"> {{ isWin === possibilities.less ? 'It\'s less' : isWin === possibilities.more ? 'It\'s more' : '' }}</b-tag>
    <b-field>
      <b-numberinput
        v-on:keyup.enter="checkAttempt()"
        v-model="priceAttempt"
      ></b-numberinput>
    </b-field>
    <b-button @click="checkAttempt()">Attempt</b-button>
  </div>
</template>

<script src="./Game.js"></script>

<style>
.game {
  margin-top: 2em;
  margin-left: 1em;
}

.inline {
  display: flex;
  flex-flow: row nowrap;
}

.inline h3{
  margin-right: 1em;
}

</style>