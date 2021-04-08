<template>
  <section>
    <div class="split">
      <b-field label="Price to find">
        <b-numberinput
          controls-position="compact"
          v-model="priceToFound"
        ></b-numberinput>
      </b-field>
    </div>
    <div class="split">
      <b-field label="Hit">
        <b-numberinput
          controls-position="compact"
          v-model="hitMax"
        ></b-numberinput>
      </b-field>
    </div>
    <div class="split">
      <b-button class="is-primary" @click="emitConfig()">Play</b-button>
    </div>
  </section>
</template>

<script src="./Config.js"></script>

<style>
</style>