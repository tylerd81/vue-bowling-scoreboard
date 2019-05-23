<template>
  <div
    class="bowler"
    :class="{currentPlayer: isCurrentPlayer}"
  >
    <player-name>{{playerName}}</player-name>
    <bowling-frame
      v-for="frameScore in scoreBoard.frameScores"
      :frame-type="frameScore.frameData.type"
      :rolls="frameScore.frameData.rolls"
      :frame-score="frameScore.score"
    ></bowling-frame>
    <total-score :score="scoreBoard.totalScore"></total-score>
  </div>
</template>

<script>
import PlayerName from "./PlayerName";
import BowlingFrame from "./BowlingFrame";
import TotalScore from "./TotalScore";

export default {
  components: {
    "player-name": PlayerName,
    "bowling-frame": BowlingFrame,
    "total-score": TotalScore
  },
  props: {
    playerName: {
      type: String
    },
    isCurrentPlayer: {
      type: Boolean,
      required: false
    },
    scoreBoard: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      roll1: {
        type: "open",
        pins: 3
      },
      roll2: {
        type: "spare",
        pins: 7
      },
      totalScore: 210,
      frameScore: 10
    };
  }
};
</script>

<style scoped>
.bowler {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-radius: 5px;
  background-color: #00008b;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px #000;
}

.currentPlayer {
  background-color: lightseagreen;
  box-shadow: none;
}
</style>
