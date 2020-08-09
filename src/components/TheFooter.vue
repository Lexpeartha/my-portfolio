<template>
  <footer :style="breakpoint == `small` ? `display: flex;` : `display: flex;`">
    <p>All rights reserved©</p>
    <a href="https://iradesign.io">Illustrations done by IRA Design</a>
    <div>
      <img alt="Instragram" :src="require(`@/assets/logo/instagram.svg`)" />
      <img alt="Github" :src="require(`@/assets/logo/github.svg`)" />
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(["breakpoint"])
  }
};
</script>

<style scoped>
footer {
  justify-content: space-between;
  background-color: #201a1a;
  padding: 20px 10%;
  color: whitesmoke;
  width: 100%;
}
footer > p {
  opacity: 1;
}
footer > a {
  color: whitesmoke;
}
footer > div {
  display: flex;
}
footer div > img {
  height: 32px;
  margin-left: 6px;
  margin-right: 6px;
}
</style>
