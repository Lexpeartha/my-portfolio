<template>
  <div class="hero__section">
    <div class="hero__section__text">
      <h1>Want your projects done?</h1>
      <h4>
        Focus on what's important, while I build your dream website for you!
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.hero__section {
  background: url("https://bit.ly/30CMvM1") 50% no-repeat;
  background-size: cover;
  height: 60vh;
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.hero__section .hero__section__text {
  color: #fefefe;
  text-shadow: 1px 1px 1px #0a0a0a;
}
</style>
