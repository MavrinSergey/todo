<template>
  <li class="task" @click="clickHandler">
    <div class="task__title">
      {{ task.title }}
    </div>
    <button class="btn task__btn"
            @click="deleteTaskHandler(task.id)">delete task
    </button>
  </li>
</template>

<script>
import {useTaskStore} from "@/stores/TaskStore";

export default {
  name: "TaskComponent",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },
  methods: {
    clickHandler(e) {
      if (e.target.tagName === 'BUTTON') {
        return
      }

      this.$router.push(`/task/${this.task.id}`)
    },
    deleteTaskHandler(id) {
      useTaskStore().deleteTask(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task {
  margin: 0 auto;
  padding: 15px 15px 15px 30px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  border: 2px solid aquamarine;
  border-radius: 29px;
}
.task__title {
  max-width: 740px;
}

@media screen and (max-width: 485px) {
  .task {
    padding: 10px 10px 10px 15px;
    width: 90%;
    column-gap: 10px;
    border: 2px solid aquamarine;
    border-radius: 20px;
  }

  .task__title {
    font-size: 12px;
  }
}
</style>
