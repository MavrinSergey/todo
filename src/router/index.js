import { createRouter, createWebHistory } from 'vue-router'
import TaskDetails from '@/pages/TaskDetails.vue'
import TaskList from '@/pages/TaskList.vue'
import TaskAdd from "@/pages/TaskAdd.vue";
import PopUp from "@/pages/PopUp.vue";

const routes = [
  {
    path: '/',
    component: TaskList,
  },
  {
    path: '/task/:id',
    component: TaskDetails,
    props: true,
  },
  {
    path: '/added-task',
    component: TaskAdd,
  },
  {
    path: '/pop-up/:id',
    component: PopUp,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
