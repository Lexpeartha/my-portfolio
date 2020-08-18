<template>
  <div id="contact-me" :style="returnProperStyle(`contact-me`)">
    <div class="wrapper">
      <h2 class="contact__title" :style="returnProperStyle(`contact__title`)">
        Contact me
      </h2>
      <hr style="opacity: 0.6;" />
      <FormulateForm :values="formObject" class="contact__form">
        <div
          class="contact__inputs"
          :style="returnProperStyle(`contact__inputs`)"
        >
          <FormulateInput
            type="email"
            name="email"
            label="Your email"
            placeholder="example123@email.com"
            help="If you type incorrect email, I won't be able to respond to you"
            validation="required"
          />
          <FormulateInput
            name="subject"
            type="text"
            label="Subject"
            placeholder="Name of the subject"
            validation="required"
          />
          <FormulateInput
            type="textarea"
            label="Enter a content of the message"
            v-model="txtArea"
            validation="required|max:250,length"
            validation-name="content"
            placeholder="Content of the message you want to send me! Please use English"
            :help="
              `Keep it under 250 characters. ${250 - txtArea.length} left.`
            "
          />
          <FormulateInput type="submit" label="Send" @click="sendData()" />
        </div>
      </FormulateForm>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ContactMe",
  data() {
    return {
      formObject: {},
      txtArea: ""
    };
  },
  computed: {
    ...mapGetters(["breakpoint"])
  },
  methods: {
    sendData() {
      /* SEND DATA TO BACK-END */
    },
    returnProperStyle(type) {
      let brpt = this.breakpoint;
      switch (type) {
        case "contact__title":
          if (brpt == "small") return "margin-left: 10%;";
          else return "";
        case "contact__inputs":
          if (brpt == "small") return "width: 80%;";
          else return "";
        case "contact-me":
          if (brpt == "small") return "padding-left: 10%; padding-right: 10%;";
          else return "";
        default:
          return "Don't";
      }
    }
  }
};
</script>

<style scoped>
#contact-me {
  background-color: #201a1a;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 20%;
  padding-right: 20%;
}

#contact-me > div {
  border: 1px solid #a8a8a8;
  background-color: whitesmoke;
  padding-bottom: 1em;
  border-radius: 15px;
}

.contact__inputs {
  margin: 0 auto;
  width: 60%;
}

.contact__inputs > div {
  margin-bottom: 2em;
}

.wrapper {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.contact__title {
  margin-left: 20%;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

.contact__form {
  margin-top: 2em;
}
</style>
