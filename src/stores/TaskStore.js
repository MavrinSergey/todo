import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
    ],
    countId: 3,
  }),
  getters: {
    getAllTasks: (state) => {
      return state.tasks;
    },
    getTaskById: (state) => {
      return (id) => state.tasks.find((el) => el.id === +id);
    },
  },
  actions: {
    deleteTask(id) {
      console.log(this.tasks);
      this.tasks = this.tasks.filter((el) => el.id !== +id);
    },
    addTask(newTask) {
      this.tasks.push({
        id: this.countId++,
        title: newTask,
        completed: false,
      });
    },
  },
});