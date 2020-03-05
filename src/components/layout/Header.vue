<template>
  <header class="header">
    <!-- <h1>{{ phrase }}</h1>
    <h2>{{ name }}</h2>
    <h2>{{ text }}</h2>-->
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div>{{ company.name }}</div>
    <div>{{ `${allUsers[0].firstName} ${allUsers[0].lastName} ` }}</div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  props: ["phrase", "name"], // These refer to external properties which the component is able to accept
  methods: {
    ...mapActions(["fetchTodos"])
  },
  data() {
    return {
      text: "This is the default banner"
    };
  },
  computed: mapGetters(["company", "allUsers"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fdfdfd;

    &.router-link-exact-active {
      color: #47ce91;
    }
  }
}
</style>
