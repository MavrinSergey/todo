<template>
  <HeaderComponent/>
  <p>{{ task.title }}</p>
  <p>{{ task.completed }}</p>
</template>

<script>
import {useTaskStore} from '@/stores/TaskStore';
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: 'TaskDetails',
  components: {HeaderComponent},

  props: {
    id: String
  },

  computed: {
    task() {
      return useTaskStore().getTaskById(+this.id)
    }
  }
}
</script>

<style scoped>

</style>