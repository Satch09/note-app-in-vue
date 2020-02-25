<template>
  <header class="header">
    <h1>{{phrase}}</h1>
    <h2>{{name}}</h2>
    <h2>{{text}}</h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["phrase", "name"], // These refer to external properties which the component is able to accept
  data() {
    return {
      text: "This is the default banner"
    };
  }
};
</script>

<style scoped>
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
</style>
