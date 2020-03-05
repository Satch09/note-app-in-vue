<template>
  <div id="app">
    <!-- <foo_counter> -->
    <h2>This is other text</h2>
    <!-- </foo_counter> -->
    <Header :phrase="phrase" :name="name" />
    <Projects />
    <!-- <div>{{ foo }}</div> -->
    <div v-if="getIsStateActive === true">TRUE!!</div>
    <div v-else>FALSE!!</div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Projects from "./components/layout/Projects.vue";

export default {
  name: "App",

  components: {
    Header,
    Projects
  },

  data() {
    return {
      phrase: "Welcome Todo Menu!",
      name: "Christopher Maisch"
    };
  },

  computed: {
    getIsStateActive() {
      return this.$store.state.isStateActive;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
