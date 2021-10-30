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
          :disabled="isDisabled || disabled"
          type="button"
          @click.prevent="submit"
        >
          <span
            class="spinner-border spinner-border-sm"
            v-if="apiProgress"
            role="status"
          ></span>
          Create
        </button>
        <button class="btn btn-outline-danger" type="button">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Todo",
  data() {
    return {
      disabled: false,
      todoInput: "",
      apiProgress: false,
    };
  },
  methods: {
    submit() {
      this.apiProgress = true;
      this.disabled = true;
      axios
        .post("/v1/todo", { content: this.todoInput })
        .then(() => {})
        .catch(() => {})
        .finally(() => {
          this.apiProgress = false;
          this.disabled = false;
        });
    },
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
