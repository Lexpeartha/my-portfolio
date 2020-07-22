<template>
  <header class="nav">
    <h2 class="nav__logo">PORTFOLIO</h2>
    <nav>
      <ul class="nav__links">
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </nav>
    <a href="#" class="cta">
      <button>Contact me</button>
    </a>
  </header>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
li,
a,
button {
  font-size: 18px;
  color: #edf0f1;
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #201a1a;
  padding: 30px 10%;
}

.nav__logo {
  cursor: pointer;
  color: #f0f0f0;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  transition: color 0.4s ease 0s;
}

.nav__logo:hover {
  color: purple;
}

.nav__links {
  list-style: none;
}

.nav__links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav__links li a {
  transition: color 0.4s ease 0s;
}

.nav__links li a:hover {
  /*color: #f0f0f0;*/
  color: purple;
}

button {
  padding: 9px 25px;
  background-color: rgba(0, 136, 189, 1);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.4s ease 0s;
}

button:hover {
  background-color: rgba(0, 136, 189, 0.8);
}
</style>
