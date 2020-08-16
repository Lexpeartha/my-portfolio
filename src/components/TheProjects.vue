<template>
  <div class="projects__section">
    <h1>This is title</h1>
    <div class="project__cards">
      <ProjectCard
        v-for="projectNum in showingProjectAmount"
        :key="projectNum"
        :projectData="projects[projectNum - 1]"
      />
    </div>
    <div class="project__expands">
      <button @click="expandOrShrink()">Expand</button>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  data() {
    return {
      expanded: true,
      projects: [
        {
          title: "This is the name of the project",
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        quasi id maxime minima perferendis non error voluptas consequatur,
        architecto minus aliquam quod ad obcaecati voluptatem accusamus sint ut
        repellat odit.`,
          imageThumbnail: null,
          codeLink: null,
          demoLink: null
        },
        {
          title: "This is the name of the project",
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        quasi id maxime minima perferendis non error voluptas consequatur,
        architecto minus aliquam quod ad obcaecati voluptatem accusamus sint ut
        repellat odit.`,
          imageThumbnail: null,
          codeLink: null,
          demoLink: null
        },
        {
          title: "This is the name of the project",
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        quasi id maxime minima perferendis non error voluptas consequatur,
        architecto minus aliquam quod ad obcaecati voluptatem accusamus sint ut
        repellat odit.`,
          imageThumbnail: null,
          codeLink: null,
          demoLink: null
        },
        {
          title: "This is the name of the project",
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        quasi id maxime minima perferendis non error voluptas consequatur,
        architecto minus aliquam quod ad obcaecati voluptatem accusamus sint ut
        repellat odit.`,
          imageThumbnail: null,
          codeLink: null,
          demoLink: null
        },
        {
          title: "This is the name of the project",
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        quasi id maxime minima perferendis non error voluptas consequatur,
        architecto minus aliquam quod ad obcaecati voluptatem accusamus sint ut
        repellat odit.`,
          imageThumbnail: null,
          codeLink: null,
          demoLink: null
        }
      ]
    };
  },
  computed: {
    showingProjectAmount() {
      if (this.expanded) {
        return this.projects.length;
      } else return 3;
    }
  },
  methods: {
    expandOrShrink() {
      this.expanded = !this.expanded;
    }
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
  align-content: space-around;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: whitesmoke;
}

.projects__section:hover {
  /* The part where it transitions to translateY and background shadow  */
}

.projects__section h1 {
  margin-bottom: 36px;
}

.project__cards {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
