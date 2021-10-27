<template>
  <div class="container">
    <div class="row">
      <h3>Todos</h3>
    </div>
    <div class="row mt-3 mb-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Todo.." />
        <button class="btn btn-outline-primary" type="button">Create</button>
        <button class="btn btn-outline-danger" type="button">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
};
</script>

<style scoped>
</style>
