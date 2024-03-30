<template>
  <form>
    <label>
      <input @input="setSearchTask"
             type="text"
             class="search-input"
             placeholder="Input task"
             v-model="searchTask">
    </label>
  </form>
</template>
<script>
import {ref} from "vue";
import {useTaskStore} from "@/stores/TaskStore";

export default {
  name: "SearchComponent",
  data() {
    return {
      searchTask: ref(''),
    }
  },
  methods: {
    setSearchTask() {
      useTaskStore().setSearchTask(this.searchTask);
    }
  }
}
</script>


<style scoped>
form {
  max-width: 330px;
  display: flex;
  justify-content: start;
  align-items: center;
}

</style>