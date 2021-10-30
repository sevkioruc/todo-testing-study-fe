<template>
  <div class="container">
    <div class="row">
      <h3>Todos</h3>
    </div>
    <div class="row mt-3 mb-3">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          data-testid="todo-input"
          v-model="todoInput"
          placeholder="Todo.."
        />
        <button
          class="btn btn-outline-primary"
          :disabled="isDisabled"
          type="button"
        >
          Create
        </button>
        <button class="btn btn-outline-danger" type="button">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      disabled: true,
      todoInput: "",
    };
  },
  computed: {
    isDisabled() {
      return this.todoInput === "";
    },
  },
};
</script>

<style scoped>
</style>
