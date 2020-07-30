<template>
  <div>
    <img :src="require(`@/assets/` + img.path)" :alt="img.name" />
    <h3>
      <slot name="title">This is default title</slot>
    </h3>
    <p>
      <slot name="content">This is default content of the body</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "Show-off Content",
  props: {
    img: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>