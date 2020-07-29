<template>
  <div class="message__board" :style="returnProperStyle('message__board')">
    <h2 class="main__message">
      Making websites with modern technology and frameworks, bringing them to
      life with animations and beatuiful UI
    </h2>
    <hr style="opacity: 0.6;" />
    <div class="messages__area" :style="returnProperStyle('messages__area')">
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
import { mapGetters } from "vuex";

export default {
  name: "MessageBoard",
  computed: {
    ...mapGetters(["breakpoint"])
  },
  methods: {
    returnProperStyle(type) {
      let brpt = this.breakpoint;
      switch (type) {
        case "message__board":
          if (brpt == "small") return "padding-left: 10%; padding-right: 10%;";
          else return "padding-left: 20%; padding-right: 20%;";
        case "messages__area":
          if (brpt == "small") return "";
          else return "display: flex;";
        default:
          return "ThatDoesn'tExist";
      }
    }
  }
};
</script>

<style scoped>
.message__board {
  margin-top: 65px;
  margin-bottom: 65px;
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
