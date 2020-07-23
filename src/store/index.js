import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screenWidth: window.innerWidth
  },
  getters: {
    breakpoint(state) {
      let tempWidth = state.screenWidth;
      switch (true) {
        case tempWidth < 840:
          return "small";
        case tempWidth < 1280:
          return "medium";
        default:
          return "big";
      }
    }
  },
  mutations: {
    UPDATE_SCREEN_WIDTH(state, newWidthValue) {
      state.screenWidth = newWidthValue;
    }
  },
  actions: {
    updateScreenSize(context, size) {
      context.commit("UPDATE_SCREEN_WIDTH", size);
    }
  },
  modules: {}
});
