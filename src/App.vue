<template>
  <div id="app">
    <Header :phrase="phrase" :name="name" />
    <div>{{foo}}</div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      phrase: "Welcome Todo Menu!",
      name: "Christopher Maisch"
    };
  },
  computed: {
    foo() {
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
