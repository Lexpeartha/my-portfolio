<template>
  <div class="project__card">
    <img
      src="https://via.placeholder.com/300x170.png?text=Pretty+awesome+project"
      alt="Project image"
    />
    <div class="project__content">
      <h3>This is the name of the project</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        quasi id maxime minima perferendis non error voluptas consequatur,
        architecto minus aliquam quod ad obcaecati voluptatem accusamus sint ut
        repellat odit.
      </p>
      <div class="button__section">
        <button>Demo</button>
        <button>Code</button>
      </div>
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
  margin: 2em 0;
  max-width: 380px;
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

.project__content h3 {
  margin-bottom: 24px;
}

.project__content p {
  margin-bottom: 24px;
}

.button__section {
  margin: 0 auto;
  width: 40%;
  display: flex;
  justify-content: space-between;
}
</style>
