<template>
  <div class="main">
    <h1>Well Come Page</h1>
    <div class="container">
      <router-link to="/todoItem">To Do List</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.main {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
