<template>
  <HeaderComponent/>
  <form @submit.prevent="">
    <label>
      <input
          type="text"
          class="search-input"
          placeholder="Input task"
          v-model="searchTask">
    </label>
  </form>
  <ul class="tasks__content">
    <TaskComponent v-for="task in getTasks"
                   :key="task.id"
                   :task="task"/>
  </ul>
</template>
<script>
import {ref} from "vue";
import TaskComponent from "@/components/TaskComponent.vue";
import {useTaskStore} from "@/stores/TaskStore";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "SearchComponent",
  components: {HeaderComponent, TaskComponent},
  data() {
    return {
      searchTask: ref(''),
    }
  },
  computed: {
    getTasks() {
      return useTaskStore().getTasksSearch(this.searchTask)
    }
  }
}
</script>


<style scoped>
form {
  padding: 30px;
  display: flex;
  justify-content: center;
}
</style>