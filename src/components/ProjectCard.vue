<template>
  <div class="project__card">
    <img
      src="https://via.placeholder.com/350x150.png?text=Pretty+awesome+project"
      alt="Project image"
    />
    <div class="project__content">
      <h3>This is the name of the project</h3>
      <p>This is a long long long long really simple description</p>
      <button>View</button>
      <button>See code</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project Card"
};
</script>

<style scoped>
.project__card {
  color: black;
  background-color: whitesmoke;
}

.project__card img {
  width: 100%;
}

.project__content {
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
