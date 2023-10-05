<template>
  <div class="main">
    <h1>ToDoList</h1>
    <div class="container">
      <div class="row g-3">
        <div class="input-group mb-3 justify-content-center mx-auto">
          <form class="row g-3">
            <div class="col-auto">
              <input type="text" class="form-control" placeholder="new todoList" aria-label="new todoList" aria-describedby="button-addon2">
            </div>
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <div class="col-auto">
              <button class="btn btn-outline-secondary " type="button" id="button-addon2">Summit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="main-list">
    <div class="container">
      <div class="listItem">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons">
          <button class="btn btn-outline-secondary" type="button">Button</button>
          <button class="btn btn-outline-secondary" type="button">Button</button>
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
