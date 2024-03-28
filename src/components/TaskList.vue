<template>
  <div class="tasks">
    <h3 class="tasks__title">All Task</h3>
    <ul class="tasks__content">
      <TaskComponent v-for="task in getTasks"
                     :key="task.id"
                     :task="task"/>
    </ul>
  </div>
</template>

<script>

import TaskComponent from "@/components/TaskComponent.vue";
import {useTaskStore} from "@/stores/TaskStore";

export default {
  name: "TaskList",
  components: {
    TaskComponent
  },
  computed:{
    getTasks(){
      return useTaskStore().getAllTasks
    }
  },

}
</script>


<style scoped>
.tasks__title {
  margin: 0;
  padding: 60px 0 30px;
  text-align: center;
}
.tasks__content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
@media screen and (max-width: 485px) {
  .tasks__title {
    padding: 40px 0 20px;
  }
  .tasks__content {
    row-gap: 15px;
  }
}
</style>