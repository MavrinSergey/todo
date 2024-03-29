import {defineStore} from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {
                "userId": 1,
                "id": 1,
                "title": "ullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sintullam nobis libero sapiente ad optio sint",
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
            {
                "userId": 1,
                "id": 11,
                "title": "vero rerum temporibus dolor",
                "completed": true
            },
            {
                "userId": 1,
                "id": 12,
                "title": "ipsa repellendus fugit nisi",
                "completed": true
            },
            {
                "userId": 1,
                "id": 13,
                "title": "et doloremque nulla",
                "completed": false
            },
            {
                "userId": 1,
                "id": 14,
                "title": "repellendus sunt dolores architecto voluptatum",
                "completed": true
            },
            {
                "userId": 1,
                "id": 15,
                "title": "ab voluptatum amet voluptas",
                "completed": true
            },
            {
                "userId": 1,
                "id": 16,
                "title": "accusamus eos facilis sint et aut voluptatem",
                "completed": true
            },
            {
                "userId": 1,
                "id": 17,
                "title": "quo laboriosam deleniti aut qui",
                "completed": true
            },
            {
                "userId": 1,
                "id": 18,
                "title": "dolorum est consequatur ea mollitia in culpa",
                "completed": false
            },
            {
                "userId": 1,
                "id": 19,
                "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
                "completed": true
            },
            {
                "userId": 1,
                "id": 20,
                "title": "estiae ipsa aut voluptatibus pariatu",
                "completed": true
            }
        ],
        countId: 3,
    }),
    getters: {
        getKeys: (state) => {
            return Object.keys(state.tasks[0])
        },
        getAllTasks: (state) => {
            return state.tasks;
        },
        getTaskById: (state) => {
            return (id) => state.tasks.find((el) => el.id === +id);
        },
        getTasksSearch: (state) => {
            return (searchStr) => {
                const searchArr = searchStr.split(' ');
                return state.tasks.filter((el) => {
                    return searchArr.every((searchTerm) => el.title.toLowerCase().includes(searchTerm.toLowerCase()));
                });
            }
        }
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
            console.log(this.tasks)
            this.tasks.sort((a, b) => a[`${selectOption}`] - b[`${selectOption}`])
            console.log(this.tasks)
        },
    },
});