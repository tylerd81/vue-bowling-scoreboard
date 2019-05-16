<template>
  <div class="total-score">
    <h2>{{score}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number
    }
  }
};
</script>

<style scoped>
.total-score {
  display: inline-block;
  color: white;
  font-size: 1rem;
  margin: 0;
  height: 5rem;
  text-align: center;
}

h2 {
}
</style>


