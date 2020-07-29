<template>
  <header class="nav">
    <h2 class="nav__logo">PORTFOLIO</h2>
    <nav style="margin-top: 15px;">
      <ul class="nav__links">
        <li>
          <a href="#" @click.prevent="navigateTo('about')">About me</a>
        </li>
        <li>
          <a href="#" @click.prevent="navigateTo('projects')">Projects</a>
        </li>
        <li>
          <a href="#" @click.prevent="navigateTo('more')">More</a>
        </li>
        <a href="#" class="cta">
          <button>Contact me</button>
        </a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MobileNavigation",
  methods: {
    navigateTo(elementID) {
      console.log(elementID);
    }
  }
};
</script>

<style scoped>
li,
a,
button {
  font-size: 18px;
  color: #f0f0f0;
  text-decoration: none;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #201a1a;
  padding: 20px 8%;
  position: sticky;
  top: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.nav__logo {
  cursor: pointer;
  color: #f0f0f0;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  transition: color 0.4s ease 0s;
  margin-left: auto;
  margin-right: auto;
}

.nav__logo:hover {
  color: rgb(138, 43, 226);
}

.nav__links {
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  overflow: hidden;
}

.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav__links li a {
  transition: color 0.4s ease 0s;
  color: #f0f0f0;
}

.nav__links li a:hover {
  /*color: #f0f0f0;*/
  color: rgb(138, 43, 226);
}

button {
  margin-left: 15px;
  padding: 9px 20px;
  background-color: rgba(138, 43, 226, 1);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.4s ease 0s;
}

button:hover {
  background-color: rgba(138, 43, 226, 0.8);
}
</style>
