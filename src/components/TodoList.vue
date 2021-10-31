<template>
  <div class="container mt-4">
    <div
      class="spinner-border spinner-border-sm"
      v-if="apiProgress"
      role="status"
    ></div>
    <div class="card" v-for="(todo, index) in todos" :key="index">
      <div class="card-body">
        <p class="card-text">{{ todo.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
      apiProgress: true,
    };
  },
  async mounted() {
    const response = await axios.get("v1/todo");
    this.todos = response.data.todos;
    this.apiProgress = false;
  },
};
</script>

<style>
</style>
