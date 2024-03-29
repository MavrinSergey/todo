<template>
  <HeaderComponent/>
  <div class="tasks">
    <h3 class="tasks__title">All Task</h3>
    <div class="filter">
      <select v-model="selected" class="select" @change="selectHandler">
        <option disabled value="">Select a sort option</option>
        <option v-for="option in getOptions" :value="option.value" :key="option.id">
          {{ option.text }}
        </option>
      </select>
      <span>Выбрано: {{ selected }}</span>
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

export default {
  name: "TaskList",
  components: {
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
    getOptions() {
      return useTaskStore().getKeys.map(item => ({text: item, value: item}));
    },
  },
  methods: {
    selectHandler() {
      console.log('selected', this.selected);
      useTaskStore().sortedTask(this.selected);
    }
  }
  // mounted() {
  //   console.log('selected', this.selected);
  //   useTaskStore().clickTagFilter(this.selected);
  // }
}
</script>


<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
}

.tasks__title {
  margin: 0;
  padding: 60px 0 30px;
  text-align: center;
}
.filter {
  padding: 30px;
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