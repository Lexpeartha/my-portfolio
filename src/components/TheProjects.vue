<template>
  <div
    ref="projects"
    class="projects__section"
    :style="expanded ? `max-height: ${returnGoodHeight()};` : `max-height: ${notExpandedH}; overflow: hidden;`"
  >
    <h1>This is title</h1>
    <transition-group
      :duration="{ enter: 800, leave: 400 }"
      name="projects"
      tag="div"
      class="project__cards"
    >
      <ProjectCard
        v-for="projectNum in showingProjectAmount"
        :key="projectNum"
        :projectData="projects[projectNum - 1]"
      />
    </transition-group>
    <ExpandButton @change-state="expandOrShrink()" :expand="expanded" />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import ExpandButton from "@/components/ExpandButton.vue";

import { mapGetters } from "vuex";

export default {
  name: "Projects",
  components: {
    ProjectCard,
    ExpandButton
  },
  mounted() {
    this.updateHeight();
  },
  data() {
    return {
      notExpandedH: "",
      expanded: false,
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
    },
    testComp() {
      this.updateHeight();
      return "brpt-test:" + this.breakpoint;
    },
    ...mapGetters(["breakpoint"])
  },
  methods: {
    expandOrShrink() {
      this.expanded = !this.expanded;
    },
    updateHeight() {
      this.expanded = false;
      this.notExpandedH = this.$refs.projects.scrollHeight + "px";
    },
    returnGoodHeight() {
      // CODE BELOW NEEDS CHANGES URGENTLY!
      // RANDOM FIXED VALUES LIKE SHOULDN'T BE USED IN PRODUCTION, BUT RATHER BE CALCULATED
      let brpt = this.breakpoint;
      if(brpt == "medium" || brpt == "small") return "4000px"
      else return "2500px;"
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
  transition: max-height 500ms ease-in-out;
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

.projects-enter-active,
.projects-leave-active {
  transition: opacity 500ms, transform 500ms;
}
.projects-enter, .projects-leave-to /* .projects-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(25px);
}
</style>
