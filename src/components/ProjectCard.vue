<template>
  <div class="project__card">
    <img
      src="https://via.placeholder.com/300x170.png?text=Pretty+awesome+project"
      alt="Project image"
    />
    <div class="project__content">
      <h3>{{ projectData.title }}</h3>
      <p>{{ projectData.content }}</p>
      <div class="button__section">
        <i class="fas fa-code"></i>

        <i class="fas fa-eye"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    projectData: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped>
.project__card {
  color: black;
  background-color: whitesmoke;
  margin: 2em 0;
  max-width: 380px;
  border-radius: 15px;
  transition: transform 100ms;
}

.project__card img {
  width: 100%;
  border-radius: 15px 15px 0 0;
}

.project__card:hover {
  /* The part where it transitions to translateY and background shadow  */
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3), 0 8px 18px 0 rgba(0, 0, 0, 0.4);
  transform: scale(1.02);
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

.button__section i {
  font-size: 125%;
  transition: transform 0.2s ease-out;
  cursor: pointer;
}

.button__section i:hover {
  transform: scale(1.3);
}
</style>
