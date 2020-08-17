<template>
  <div id="app">
    <component
      style="z-index: 99;"
      :is="breakpoint == 'small' ? 'TheMobileNav' : 'TheNav'"
    ></component>
    <TheHero />
    <TheMessageBoard :breakpoint="breakpoint" />
    <TheAbout />
    <TheContent
      :right="true"
      :img="{ name: `technologies`, path: `technologies.svg` }"
    >
      <span slot="title">This is not a title</span>
      <span slot="content"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo
        ad. Necessitatibus delectus, quod laboriosam alias minima placeat ipsam
        fugit eum! Commodi provident ut magnam impedit, voluptatem minima labore
        cupiditate.</span
      >
    </TheContent>
    <TheProjects id="my-projects" />
    <TheContent
      :right="false"
      :img="{ name: `always-on-time`, path: `always-on-time.svg` }"
    >
      <span slot="title">This is not a title</span>
      <span slot="content"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        unde quas reprehenderit! Expedita, itaque. Mollitia, impedit! Fugit quos
        dolor quasi ratione ex blanditiis, reiciendis reprehenderit, numquam
        consequatur dolores facilis soluta?</span
      >
    </TheContent>
    <TheContact />
    <p id="more">More section</p>
    <TheFooter />
  </div>
</template>

<script>
import TheNav from "@/components/TheNavigation.vue";
import TheMobileNav from "@/components/TheMobileNav.vue";
import TheHero from "@/components/TheHero.vue";
import TheMessageBoard from "@/components/MessageBoard.vue";
import AboutMe from "@/components/AboutMe.vue";
import ContentShowoff from "@/components/ContentShowoff.vue";
import TheProjects from "@/components/TheProjects.vue";
import ContactMe from "@/components/ContactMe.vue";
import TheFooter from "@/components/TheFooter.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    TheNav,
    TheMobileNav,
    TheHero,
    TheMessageBoard,
    TheAbout: AboutMe,
    TheContent: ContentShowoff,
    TheProjects,
    TheContact: ContactMe,
    TheFooter
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
  line-height: 130%;
}
</style>
