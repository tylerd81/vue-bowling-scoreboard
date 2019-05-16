<template>
  <div class="player-name">
    <h2>{{playerName}}</h2>
  </div>
</template>

<script>
export default {
  props: ["playerName"]
};
</script>

<style scoped>
.player-name {
  display: inline-block;

  margin-top: 0;
  width: 10rem;
}

.player-name h2 {
  margin: 0;
}
</style>


