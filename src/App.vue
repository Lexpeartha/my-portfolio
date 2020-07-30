<template>
  <div id="app">
    <component
      style="z-index: 99;"
      :is="breakpoint == 'small' ? 'TheMobileNav' : 'TheNav'"
    ></component>
    <TheHero />
    <TheMessageBoard :breakpoint="breakpoint" />
    <TheAbout />
    <a v-for="i in 60" :key="i" href="https://iradesign.io"
      >Illustrations by IRA Design
      <br />
    </a>
  </div>
</template>

<script>
import TheNav from "@/components/TheNavigation.vue";
import TheMobileNav from "@/components/TheMobileNav.vue";
import TheHero from "@/components/TheHero.vue";
import TheMessageBoard from "@/components/MessageBoard.vue";
import AboutMe from "@/components/AboutMe.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TheNav,
    TheMobileNav,
    TheHero,
    TheMessageBoard,
    TheAbout: AboutMe
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
