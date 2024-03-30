<template>
  <header class="header">
    <h2 class="header__title">My task list</h2>
    <div class="btn-group">
      <button @click="this.$router.push(`/`)"
              class="btn btn_search">All Task
      </button>
      <button @click="this.$router.push(`/added-task`)"
              class="btn btn_search">Add Task
      </button>
    </div>
  </header>
</template>
<script>

export default {
  name: "HeaderComponent",
}
</script>


<style scoped>
.header {
  margin: 0 auto;
  padding: 30px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

@media screen and (max-width: 485px) {
  .header__title {
    margin: 0 0 20px 0;
    padding: 40px 0 0;
    text-align: center;
  }
  .btn-group {
    margin-right: 15px;
    column-gap: 8px;
  }
}
</style>