<template>
  <div class="player-name">
    <slot></slot>
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

  color: white;
  font-size: 2rem;
}

.player-name h2 {
  margin: 0;
}
</style>


