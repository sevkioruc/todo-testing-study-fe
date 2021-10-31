<template>
  <div id="app">
    <TodoCreate />
    <TodoList />
  </div>
</template>

<script>
import TodoCreate from "./components/TodoCreate.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoCreate,
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
