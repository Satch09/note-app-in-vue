<template>
  <div>
    This actually works
    <slot></slot>
    <foo_input></foo_input>
  </div>
</template>

<script>
import foo_input from "./foo_input";
export default {
  data() {},
  components: { foo_input }
};
</script>