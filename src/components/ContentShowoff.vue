<template>
  <div class="content" :style="returnProperStyle(`content`)">
    <img :src="require(`@/assets/` + img.path)" :alt="img.name" :style="returnProperStyle(`img`)" />
    <div class="text__area" :style="returnProperStyle(`text__area`)">
      <h3>
        <slot name="title">This is default title</slot>
      </h3>
      <p style="margin-top: 15px;">
        <slot name="content">This is default content of the body</slot>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Show-off Content",
  props: {
    img: {
      type: Object,
      required: true
    },
    right: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters(["breakpoint"])
  },
  methods: {
    returnProperStyle(type) {
      let brpt = this.breakpoint;
      let styleString = "";
      switch (type) {
        case "content":
          if (this.right) styleString += "flex-direction: row-reverse;";
          if (brpt == "medium" || brpt == "small")
            styleString += "text-align: center;";
          else if (brpt == "big")
            styleString +=
              "display: flex; padding-left: 20%; padding-right: 20%;";
          return styleString;
        case "text__area":
          if (brpt == "small" || brpt == "medium")
            return "margin-top: 40px; margin-left: 20%; margin-right: 20%;";
          break;
        /* case "img": 
          if (brpt == "small") return "height: auto;"; */
      }
    }
  }
};
</script>

<style scoped>
.content {
  padding-top: 65px;
  padding-bottom: 65px;
  justify-content: space-between;
}

.content img {
  height: 280px;
}

.text__area {
  margin-right: 5%;
}
</style>
