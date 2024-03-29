import { createRouter, createWebHistory } from 'vue-router'
import TaskDetails from '@/pages/TaskDetails.vue'
import TaskList from '@/pages/TaskList.vue'
import SearchComponent from "@/pages/SearchComponent.vue";
import TaskAdd from "@/pages/TaskAdd.vue";

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
    path: '/search',
    component: SearchComponent,
  },
  {
    path: '/added-task',
    component: TaskAdd,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
