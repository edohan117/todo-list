<template>
  <div class="main">
    <h1>ToDoList</h1>
    <div class="container">
      <div class="row">
        <div class="input-group mb-3 justify-content-center mx-auto">
          <input type="text" class="form-control" placeholder="new todoList" aria-label="new todoList" aria-describedby="button-addon2">
          <input type="datetime-local" class="form-control" name="time" id="time">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Summit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.main{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  border: 10px;
}
.container{
  margin-top: 45px;
}
.mt-10{
  margin-top: 10px;
}
</style>
