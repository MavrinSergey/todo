import { createRouter, createWebHistory } from 'vue-router'
import TaskDetails from '@/components/TaskDetails.vue'
import TaskList from '@/components/TaskList.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
