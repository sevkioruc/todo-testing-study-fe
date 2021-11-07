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
          v-model="todoTitle"
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoCreate",
  data() {
    return {
      disabled: false,
      todoTitle: "",
      apiProgress: false,
    };
  },
  methods: {
    submit() {
      this.apiProgress = true;
      this.disabled = true;
      axios
        .post("/v1/todo", { title: this.todoTitle })
        .then(() => {})
        .catch(() => {})
        .finally(() => {
          this.apiProgress = false;
          this.disabled = false;
          this.todoTitle = "";
        });
    },
  },
  computed: {
    isDisabled() {
      return this.todoTitle === "";
    },
  },
};
</script>

<style scoped>
</style>
