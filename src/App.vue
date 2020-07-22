<template>
  <div id="app">
    <TheNav />
  </div>
</template>

<script>
import TheNav from "@/components/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNav
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
</style>
