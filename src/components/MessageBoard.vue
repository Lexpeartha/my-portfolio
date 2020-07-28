<template>
  <div class="message__board">
    <h2 class="main__message">
      Making websites with modern technology and frameworks, bringing them to
      life with animations and beatuiful UI
    </h2>
    <hr style="opacity: 0.6;" />
    <div
      class="messages__area"
      :style="breakpoint == 'small' ? '' : 'display: flex;'"
    >
      <div class="message">
        <h4 class="message__title">High-quality code</h4>
        <p class="message__content">
          I always strive to deliever first-quality code, that is well
          documented and utilizes best practices
        </p>
      </div>
      <div class="message">
        <h4 class="message__title">Clients first</h4>
        <p class="message__content">
          Client's needs are always my first priority. Tell me what you need,
          and I will get it done!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBoard",
  props: {
    breakpoint: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.message__board {
  margin-top: 65px;
  margin-bottom: 65px;
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main__message {
  margin-bottom: 45px;
}

.messages__area {
  margin-top: 45px;
  justify-content: space-between;
  text-align: start;
}

.message__title {
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 12px;
}

.message__content {
  width: 80%;
}
</style>
