<template>
  <b-menu class="menu">
    <h2 class="title is-2">The Right Price</h2>
    <slot></slot>
  </b-menu>
</template>

<script>
export default {
}
</script>

<style>
.menu{
    width: 20%;
    margin-right: 5em;
    padding: 1em 2em 0 2em;
    height: 100vh;
    box-shadow: 6px 0px 23px rgb(50,50,50, .5);
}
</style>