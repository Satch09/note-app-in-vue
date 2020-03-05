<template>
  <div>
    Projects
    <div v-for="project in allProjects" :key="project.uuid">
      {{ project.name }}
      <Project :project="project" :key="project.uuid" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Project from "../Project";
export default {
  name: "Projects",
  components: { Project },
  computed: mapGetters(["allProjects"])
};
</script>

<style></style>
