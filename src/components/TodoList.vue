<template>
  <div class="container mt-4">
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
    };
  },
  async mounted() {
    const response = await axios.get("v1/todo");
    this.todos = response.data.todos;
  },
};
</script>

<style>
</style>
