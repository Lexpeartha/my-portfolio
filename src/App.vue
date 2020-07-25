<template>
  <div id="app">
    <component
      :is="breakpoint == 'small' ? 'TheMobileNav' : 'TheNav'"
    ></component>
    <TheHero />
    <a href="https://iradesign.io">Illustrations by IRA Design</a>
  </div>
</template>

<script>
import TheNav from "@/components/TheNavigation.vue";
import TheMobileNav from "@/components/TheMobileNav.vue";
import TheHero from "@/components/TheHero.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TheNav,
    TheMobileNav,
    TheHero
  },
  created() {
    window.addEventListener("resize", () => {
      this.$store.dispatch("updateScreenSize", window.innerWidth);
    });
  },
  computed: {
    ...mapGetters(["breakpoint"])
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
