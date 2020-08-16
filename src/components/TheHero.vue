<template>
  <div class="hero__section">
    <div class="hero__section__text">
      <h1 class="shrink">Want your projects done?</h1>
      <h3 class="shrink">
        Focus on what's important, while I build your dream website for you!
      </h3>
      <button>Hire me</button>
      <p>
        <a href="#">Or contact me directly though this website</a>
      </p>
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
  background: url("https://i.imgur.com/OuGq8uT.png") 50% no-repeat; /* https://bit.ly/30CMvM1 */
  background-size: cover;
  height: 80vh;
  min-height: 60vh;
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
  color: #f0f0f0;
  width: 100%;
  text-shadow: 1px 1px 2px #201a1a;
}
.hero__section__text button {
  margin-top: 64px;
  margin-left: 20px;
  padding: 9px 25px;
  background-color: rgba(245, 245, 245, 1);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

.hero__section__text button:hover {
  transform: scale(1.05);
}

.hero__section__text p {
  margin-top: 8px;
  opacity: 0.8;
}

.hero__section__text p a {
  color: #f5f5f5;
  background-image: linear-gradient(transparent calc(100% - 1px), #f5f5f5 1px);
  text-decoration: none;
  background-size: 100% 100%;
  background-position: 100%;
  position: relative;
  background-repeat: no-repeat;
  transition: background-size 200ms;
  z-index: 0;
}

.hero__section__text p a:hover {
  background-size: 0 100%;
}

.shrink {
  padding-right: 10%;
  padding-left: 10%;
}
</style>
