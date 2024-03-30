<template>
  <HeaderComponent/>
  <div class="tasks">
    <h3 class="tasks__title">All Task</h3>
    <div class="filter-and-search">
      <FilterComponent/>
      <SearchComponent/>
    </div>
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
import HeaderComponent from "@/components/HeaderComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";

export default {
  name: "TaskList",
  components: {
    FilterComponent,
    SearchComponent,
    HeaderComponent,
    TaskComponent
  },
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    getTasks() {
      return useTaskStore().getAllTasks
    },
  },
}
</script>

<style scoped>
.tasks {
  margin-bottom: 50px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.tasks__title {
  margin: 0;
  padding: 30px 0 30px;
  text-align: center;
}
.filter-and-search {
  display: flex;
  justify-content: space-between;
}

.tasks__content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

@media screen and (max-width: 550px) {
  .tasks__title {
    padding: 40px 0 20px;
  }

  .tasks__content {
    row-gap: 15px;
  }
  .filter-and-search {
    flex-direction: column-reverse;
  }
}
</style>