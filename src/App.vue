<template>
  <div id="app">
    <TheNav />
    <TheHero />
  </div>
</template>

<script>
import TheNav from "@/components/TheNavigation.vue";
import TheHero from "@/components/TheHero.vue";

export default {
  name: "App",
  components: {
    TheNav,
    TheHero
  },
  created() {
    window.addEventListener("resize", () => {
      this.$store.dispatch("updateScreenSize", window.innerWidth);
    });
  },
  methods: {}
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
