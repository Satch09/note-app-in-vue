<template>
  <div class="todo-item" :class="{ 'is-complete': project.completed }">
    <!-- <div class="todo-item"> -->
    <h2>{{ project.name }}</h2>
    <h3>{{ project.details }}</h3>
    <p>{{ project.tags }}</p>
    <input
      type="checkbox"
      @change="markComplete"
      :checked="this.project.completed"
    />
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["project"],
  methods: {
    markComplete() {
      this.project.completed = !this.project.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
