<template>
  <li class="task"
      :class="{ task_notcompleted: !task.completed }"
      @click="clickHandler">
    <div class="change-task">
      <img @click="this.$router.push(`/pop-up/${task.id}`)"
           class="change-task__icon"
           src="@/assets/pen-new-square-svgrepo-com.svg"
           alt="change-task">
    </div>
    <div class="task__title">
      {{ task.title }}
    </div>
    <div class="btn-group">
      <button v-if="!task.completed"
              class="btn"
              @click="completeTaskHandler(task.id)">complete
      </button>
      <button class="btn task__btn"
              @click="deleteTaskHandler(task.id)">delete task
      </button>
    </div>
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
    clickHandler({target}) {
      if (target.tagName === 'BUTTON' || target.tagName === 'IMG') {
        return
      }
      this.$router.push(`/task/${this.task.id}`)
    },
    deleteTaskHandler(id) {
      useTaskStore().deleteTask(id)
    },
    completeTaskHandler(id) {
      useTaskStore().completeTask(id)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.task {
  margin: 0 auto;
  padding: 15px 15px 15px 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 5px;
  border: 2px solid aquamarine;
  border-radius: 29px;
}

.task_notcompleted {
  border-color: orange;
}

.change-task__icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.task__title {
  align-self: flex-start;
}

@media screen and (max-width: 485px) {
  .task {
    padding: 10px 10px 10px 15px;
    column-gap: 10px;
    border: 2px solid aquamarine;
    border-radius: 20px;
  }

  .task__title {
    font-size: 12px;
  }
}
</style>
