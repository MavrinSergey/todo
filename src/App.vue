<template>
<section class="section">
  <header class="header">
    <h2 class="header__title">My task list</h2>
  </header>
  <form action="#"
        @submit.prevent="addTaskHandler">
    <label for="task">
      <input type="text"
             id="task"
             placeholder="enter a new task"
             v-model="newTask"
             :class="{ error: errorVar } "
             @input="errorVar=false">
    </label>
    <button class="btn"
            type="submit">add task
    </button>
  </form>
  <router-view/>
</section>
</template>
<script>
import {useTaskStore} from "@/stores/TaskStore";

export default {
  name: "App",
  data() {
    return {
      newTask: '',
      errorVar: false,
    }
  },
  methods: {
    addTaskHandler() {
      if (this.newTask) {
        useTaskStore().addTask(this.newTask);
        this.newTask = '';
      } else {
        const inputEl = document.getElementById('task');
        this.errorVar = true;
        inputEl.classList.add('error')
      }
    },
  }
}
</script>
<style>
.section {
  background: #292F36;
  color: #F4F0EC;
}
.header {
  margin: 0 auto;
  max-width: 1200px;

}
.header__title {
  margin: 0 0 30px 0;
  padding: 60px 0 0;
  text-align: center;
}
form {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
#task {
  padding: 13px 27px;
  border-radius: 18px;
  font-family: "Roboto Light", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
}
.error {
  border: 1px solid red;
}
@media screen and (max-width: 485px) {
  .header__title {
    margin: 0 0 20px 0;
    padding: 40px 0 0;
    text-align: center;
  }
  form {
    gap: 15px;
  }
  #task {
    padding: 7px 14px;
    border-radius: 9px;
    font-size: 12px;
  }
}
</style>
