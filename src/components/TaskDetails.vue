<template>
<section>
    <p>{{ task.title }}</p>
    <p>{{ task.completed }}</p>
</section>
</template>

<script >
import { useTaskStore } from '@/stores/TaskStore';
export default{
    name:'TaskDetails',
    
    props:{
        id:String
    },
   
    computed:{
        task(){ console.log(1)
            return useTaskStore().getTaskById(+this.id)
        }
    }
}
</script>

<style scoped>

</style>