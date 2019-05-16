<template>
  <div class="bowler">
    <player-name>{{playerName}}</player-name>
    <bowling-frame
      v-for="n in 10"
      :class="{lastFrame: n == 10}"
      :first-roll="roll1"
      :second-roll="roll2"
      :frame-score="frameScore"
    ></bowling-frame>
    <total-score :score="totalScore"></total-score>
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
</style>
