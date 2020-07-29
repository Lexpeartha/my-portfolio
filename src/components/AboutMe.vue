<template>
  <div
    id="about-me"
    class="about__section"
    :style="returnProperStyle('about__section')"
  >
    <div class="about__image__section">
      <img
        class="about__image"
        src="https://via.placeholder.com/256"
        alt="Picture of me"
      />
      <p>This is me</p>
    </div>
    <div class="about__texts" :style="returnProperStyle('about__texts')">
      <h3 class="texts_h">
        This is very very very long placeholder title x title
      </h3>
      <p class="texts__p" :style="returnProperStyle('texts__p')">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi
        labore esse maiores nulla facere possimus atque doloremque earum ipsum
        temporibus molestiae, quidem quos rem ex cum voluptatum nostrum numquam.
      </p>
      <div class="my__skills">
        <img
          v-for="logo in logoArray"
          :key="logo.name"
          class="skill__logo"
          :src="require(`@/assets/logo/` + logo.path)"
          :alt="logo.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "About",
  data() {
    return {
      logoArray: [
        {
          path: "html-logo.png",
          name: "Html"
        },
        {
          path: "css-logo.png",
          name: "Css"
        },
        {
          path: "vue-logo.png",
          name: "Vue"
        },
        {
          path: "shopify-logo.png",
          name: "Shopify"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["breakpoint"])
  },
  methods: {
    returnProperStyle(type) {
      let brpt = this.breakpoint;
      switch (type) {
        case "about__section":
          if (brpt == "medium" || brpt == "small") return "";
          else return "display: flex; padding-left: 20%; padding-right: 20%;";
        case "about__texts":
          if (brpt == "medium")
            return "margin-top: 60px; margin-left: 20%; margin-right: 20%;";
          else if (brpt == "small") return "margin-top: 60px;";
          else return "";
        case "texts__p":
          if (brpt == "medium" || brpt == "small") return "";
          else return "";
        default:
          return "ThatDoesn'tExist";
      }
    }
  }
};
</script>

<style scoped>
.about__section {
  padding-top: 65px;
  padding-bottom: 65px;
  background-color: #201a1a;
  color: whitesmoke;
  justify-content: center;
}

.about__image__section {
  text-align: center;
}

.about__image {
  border-radius: 100%;
  margin-bottom: 15px;
}

.about__image__section,
.about__texts {
  padding-left: 10%;
  padding-right: 10%;
}

.texts__p {
  margin-top: 15px;
}

.my__skills {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.skill__logo {
  height: 48px;
}
</style>
