<template>
  <div class="main" id="main-container">
    <h1>ToDoList</h1>
    <div class="container">
      <div class="row g-3">
        <div class="input-group mb-3 justify-content-center mx-auto" style="margin-top: 40px;">
          <form class="row g-3">
            <div class="col-auto">
              <input type="text" class="form-control" placeholder="new todoList" aria-label="new todoList"
                aria-describedby="button-addon2">
            </div>
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time" v-model="defaultTime">
            </div>
            <div class="col-auto">
              <button class="btn btn-outline-secondary " type="button" id="button-addon2"
                @click="handleSummitClick">Summit</button>
            </div>
          </form>
        </div>
      </div>
      <div class="main-list">
        <div class="container">
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
          <div class="input-group for-item">
            <input type="text" readonly class="form-control" value="이런 내용들이 들어가 있겠징">
            <div class="col-auto">
              <input type="datetime-local" class="form-control" name="time" id="time">
            </div>
            <button class="btn btn-outline-secondary" type="button">Button</button>
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 'defaultTime'을 데이터 속성으로 추가
      defaultTime: '', // 초기값은 빈 문자열로 설정
    };
  },
  computed: {
  },
  created() {
    // 컴포넌트가 생성될 때 현재 시간에서 1시간을 더한 값을 'defaultTime'에 설정
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + 10);
    // 'datetime-local' 형식에 맞게 문자열로 변환하여 설정
    this.defaultTime = currentTime.toISOString().slice(0, 16);
  },
  methods: {
    handleSummitClick() {
      // 'defaultTime' 값은 이미 'v-model'에 의해 변경되어 있습니다.
      console.log('Selected Time:', this.defaultTime);
    },
  },
};
</script>

<style scoped>
.main-list {
  margin-top: 30px;
}

.for-item {
  margin-bottom: 15px;
}
</style>
