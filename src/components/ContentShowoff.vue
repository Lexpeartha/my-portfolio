<template>
  <div class="content" :style="returnProperStyle(`content`)">
    <img
      :src="require(`@/assets/` + img.path)"
      :alt="img.name"
      :style="returnProperStyle(`img`)"
    />
    <div class="text__area" :style="returnProperStyle(`text__area`)">
      <h3>
        <slot name="title">This is default title</slot>
      </h3>
      <p>
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
          if (brpt == "small") styleString += "text-align: center;";
          else if (brpt != "small")
            styleString +=
              "display: flex; padding-left: 20%; padding-right: 20%;";
          return styleString;
        case "text__area":
          if (brpt == "small") return "margin-top: 40px;";
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
  justify-content: space-around;
}

.content img {
}
</style>
