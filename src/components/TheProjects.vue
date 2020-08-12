<template>
  <div class="projects__section">
    <h1 class="projects__title">This is title</h1>
    <div class="project__cards">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Projects",
  components: {
    ProjectCard
  }
};
</script>

<style scoped>
.projects__section {
  background: url("https://i.imgur.com/cHnXkmb.jpg") 50% no-repeat;
  background-size: cover;
  padding-top: 65px;
  padding-bottom: 65px;
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: whitesmoke;
}

.project__cards {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
