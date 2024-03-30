<template>
  <HeaderComponent/>
  <div class="task-description">
    <p class="text"><span class="text_cursive">task id: </span>- {{ id }}</p>
    <p class="text"><span class="text_cursive">task title: </span>- {{ task.title }}</p>
    <p class="text"><span class="text_cursive">task completed: </span>- {{ task.completed }}</p>
  </div>
</template>

<script>
import {useTaskStore} from '@/stores/TaskStore';
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: 'TaskDetails',
  components: {HeaderComponent},
  props: {
    id: String
  },
  computed: {
    task() {
      return useTaskStore().getTaskById(+this.id)
    }
  }
}
</script>

<style scoped>
.task-description {
  padding: 30px;
}
.text {
  font-size: 16px;
  font-weight: 400;
}

.text_cursive {
  font-size: 22px;
  font-weight: 600;
  line-height: 150%;
  font-style: italic;
}
</style>