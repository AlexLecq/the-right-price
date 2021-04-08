<template>
  <section>
    <b-field>
      <b-radio v-model="mode" native-value="1"> Timer </b-radio>
    </b-field>
    <b-field>
      <b-radio v-model="mode" native-value="0" type="is-info"> Hit </b-radio>
    </b-field>
    <div class="split">
      <b-field label="Price to find">
        <b-numberinput
          controls-position="compact"
          v-model="priceToFound"
        ></b-numberinput>
      </b-field>
    </div>
    <div class="split">
      <b-field label="Minimum random">
        <b-numberinput
          controls-position="compact"
          v-model="rangeMin"
        ></b-numberinput>
      </b-field>
    </div>
    <div class="split">
      <b-field label="Maximum random">
        <b-numberinput
          controls-position="compact"
          v-model="rangeMax"
        ></b-numberinput>
      </b-field>
    </div>
    <div v-if="+mode === 1" class="split">
      <b-field label="Timer (minutes)">
        <b-input v-model="expirationTime"></b-input>
      </b-field>
    </div>
    <div v-else-if="+mode === 0" class="split">
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
.split {
  margin: 1em 0 1em 0;
}
</style>