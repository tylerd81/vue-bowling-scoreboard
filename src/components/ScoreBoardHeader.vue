<template>
  <div class="score-board-header">
    <div class="player-name-header">Player</div>
    <div class="frame-number">1</div>
    <div class="frame-number">2</div>
    <div class="frame-number">3</div>
    <div class="frame-number">4</div>
    <div class="frame-number">5</div>
    <div class="frame-number">6</div>
    <div class="frame-number">7</div>
    <div class="frame-number">8</div>
    <div class="frame-number">9</div>
    <div class="frame-number">10</div>
    <div class="total-score-header">Score</div>
  </div>
</template>

<style scoped>
.score-board-header {
  display: grid;
  grid-template-columns: 10rem repeat(11, 1fr);
  color: white;
  font-size: 2rem;
  background-color: darkblue;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
}

.frame-number,
.total-score-header,
.player-name-header {
  text-align: center;
  border-left: solid 1px #353597;
}
</style>
