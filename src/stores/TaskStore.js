import {defineStore} from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            },
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
            },
            {
                "userId": 1,
                "id": 6,
                "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                "completed": false
            },
            {
                "userId": 1,
                "id": 7,
                "title": "illo expedita consequatur quia in",
                "completed": false
            },
            {
                "userId": 1,
                "id": 8,
                "title": "quo adipisci enim quam ut ab",
                "completed": true
            },
            {
                "userId": 1,
                "id": 9,
                "title": "molestiae perspiciatis ipsa",
                "completed": false
            },
            {
                "userId": 1,
                "id": 10,
                "title": "illo est ratione doloremque quia maiores aut",
                "completed": true
            },
        ],
        countId: 21,
        tasksFilter: [],
    }),
    getters: {
        getKeys: (state) => {
            if (state.tasks.length > 0) {
                return Object.keys(state.tasks[0])
            }
            return -1;
        },
        getAllTasks: (state) => {
            if (state.tasksFilter.length === 0) {
                return state.tasks;
            }
            return state.tasksFilter
        },
        getTaskById: (state) => {
            return (id) => state.tasks.find((el) => el.id === +id);
        },
    },
    actions: {
        deleteTask(id) {
            this.tasks = this.tasks.filter((el) => el.id !== +id);
        },
        addTask(newTask) {
            this.tasks.push({
                id: this.countId++,
                title: newTask,
                completed: false,
            });
        },
        sortedTask(selectOption) {
            const tasksToSort = this.tasksFilter.length === 0 ? this.tasks : this.tasksFilter;
            tasksToSort.sort((a, b) => a[selectOption] < b[selectOption] ? -1 : a[selectOption] > b[selectOption] ? 1 : 0);
        },
        completeTask(id) {
            this.getTaskById(id).completed = true;
        },
        titleTask(id, title) {
            this.getTaskById(id).title = title;
        },
        setSearchTask(searchStr) {
            if (searchStr.trim() === "") {
                this.tasksFilter = [];
            } else {
                const searchArr = searchStr.split(' ');
                this.tasksFilter = this.tasks.filter((el) => {
                    return searchArr.every((searchTerm) => el.title.toLowerCase().includes(searchTerm.toLowerCase()));
                });
            }
        },
    },
});