<template>
  <div class="filter">
    <select v-model="selected" class="select" @change="selectHandler">
      <option disabled value="">Select a sort option</option>
      <option v-for="option in getOptions" :value="option.value" :key="option.id">
        {{ option.text }}
      </option>
    </select>
    <p v-if="selected === ''"></p>
    <p v-else>sorted by: {{ selected }}</p>
  </div>
</template>

<script>
import {useTaskStore} from "@/stores/TaskStore";

export default {
  name: "FilterComponent",
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    getOptions() {
      if (useTaskStore().getKeys === -1) {
        return []
      }
      return useTaskStore().getKeys.map(item => ({text: item, value: item}));
    },
  },
  methods: {
    selectHandler() {
      useTaskStore().sortedTask(this.selected);
    }
  }
}
</script>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
</style>