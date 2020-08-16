<template>
  <div class="project__expands">
    <button @click="emitChange()">
      <i :class="'fas fa-arrow-' + (expand ? 'down' : 'up')"></i>
      {{ expand ? 'Show more' : 'Show less' }}
      <i :class="'fas fa-arrow-' + (expand ? 'down' : 'up')"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "ExpandButton",
  props: {
    expand: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    emitChange() {
      this.$emit("change-state");
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 20px;
  padding: 9px 25px;
  background-color: rgba(138, 43, 226, 1);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  color: whitesmoke;
  transition: background-color 0.4s ease 0s, transform 0.3s ease-out;
}

button:hover {
  background-color: rgba(138, 43, 226, 0.8);
  transform: scale(1.05);
}
</style>
