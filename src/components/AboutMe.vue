<template>
  <div class="about__section" :style="returnProperStyle('about__section')">
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "About",
  computed: {
    ...mapGetters(["breakpoint"])
  },
  methods: {
    returnProperStyle(type) {
      let brpt = this.breakpoint;
      switch (type) {
        case "about__section":
          if (brpt == "small") return "";
          else return "display: flex;";
        case "about__texts":
          if (brpt == "small") return "margin-top: 60px";
          else return "";
        case "texts__p":
          if (brpt == "small") return "";
          else return "width: 75%;";
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
  padding-left: 60px;
  padding-right: 60px;
}

.texts__p {
  margin-top: 15px;
}
</style>
