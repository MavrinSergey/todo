<template>
  <HeaderComponent/>
  <div class="pop-up__wrapper">
    <div class="pop-up">
      <label for="title-task">Enter new task text
      </label>
      <input v-model="newTitleTask"
             type="text"
             name="title-task"
             id="title-task">
      <button @click="editTask"
              class="btn">Edit
      </button>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import {useTaskStore} from "@/stores/TaskStore";

export default {
  name: 'PopUp',
  components: {HeaderComponent},
  props: {
    id: String
  },
  data() {
    return {
      newTitleTask: ''
    }
  },
  methods: {
    editTask() {
      useTaskStore().titleTask(+this.id, this.newTitleTask);
      this.$router.push(`/`);
    }
  }
}
</script>


<style scoped>
.pop-up__wrapper {
  position: relative;
  height: 80vh;
  background-color: grey;
}

.pop-up {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 30px 10px;
  transform: translate(-50%, -50%);
  border: 2px solid aquamarine;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
}
</style>