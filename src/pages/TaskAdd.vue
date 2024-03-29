<template>
  <HeaderComponent/>
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
</template>
<script>

import {defineComponent} from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {useTaskStore} from "@/stores/TaskStore";

export default defineComponent({
  components: {HeaderComponent},
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
})
</script>


<style scoped>
form {
  padding: 30px;
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