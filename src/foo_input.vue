<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is the message"
    };
  }
};
</script>
