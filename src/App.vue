<template>
  <div id="app">
    <component
      style="z-index: 99;"
      :is="breakpoint == 'small' ? 'TheMobileNav' : 'TheNav'"
    >
    </component>
    <TheHero />
    <TheMessageBoard :breakpoint="breakpoint" />
    <TheAbout />
    <TheContent :img="{ name: `technologies`, path: `technologies.svg` }">
      <span slot="title">This is not a title</span>
      <span slot="content">This is not a content</span>
    </TheContent>
    <p id="my-projects">Projects</p>
    <TheContent
      :right="true"
      :img="{ name: `always-on-time`, path: `always-on-time.svg` }"
    >
      <span slot="title">This is not a title</span>
      <span slot="content">This is not a content</span>
    </TheContent>
    <p>Contact me</p>
    <p id="more">More section</p>
    <a href="https://iradesign.io">
      Illustrations by IRA Design (Footer)
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
import ContentShowoff from "@/components/ContentShowoff.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TheNav,
    TheMobileNav,
    TheHero,
    TheMessageBoard,
    TheAbout: AboutMe,
    TheContent: ContentShowoff
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
