<template>
  <div id="app">
    <score-board-header></score-board-header>
    <bowler
      player-name="Tyler"
      :score-board="scoreBoard"
    ></bowler>

    <input
      type="text"
      v-model.number="currentRoll"
    >
    <button
      type="button"
      @click="addRoll"
    >Add</button>
  </div>
</template>

<script>
// import BowlingFrame from "./components/BowlingFrame.vue";
// import PlayerName from "./components/PlayerName.vue";
import Bowler from "./components/Bowler";
import ScoreBoardHeader from "./components/ScoreBoardHeader";
import BowlingScoreBoard from "./utils/bowling-simple.js";

export default {
  components: {
    bowler: Bowler,
    "score-board-header": ScoreBoardHeader
  },
  data() {
    return {
      scoreBoard: {},
      rolls: [],
      currentRoll: 0
    };
  },
  // created() {
  //   let rolls = [1, 3, 4, 6, 9, 0, 10, 1, 3];
  //   let perfect = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9];
  // },
  methods: {
    addRoll(e) {
      this.rolls.push(this.currentRoll);
      this.scoreBoard = BowlingScoreBoard.calculateScore(this.rolls);
    }
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  background: linear-gradient(to bottom right, blue 0%, lightblue 100%);
  font-family: "Baloo Bhai";
}
.current-player {
}
</style>
