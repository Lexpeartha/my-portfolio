<template>
  <div class="content" :style="right ? `flex-direction: row-reverse;` : ``">
    <img :src="require(`@/assets/` + img.path)" :alt="img.name" />
    <div class="text__area">
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
  }
};
</script>

<style scoped>
.content {
  display: flex;
  padding-left: 20%;
  padding-right: 20%;
  justify-content: center;
}
</style>
