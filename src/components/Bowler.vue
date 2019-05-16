<template>
  <div>
    <player-name>{{playerName}}</player-name>
    <bowling-frame
      v-for="n in 10"
      :class="{lastFrame: n == 10}"
      :rolls="rolls"
      :total-score="totalScore"
    ></bowling-frame>
  </div>
</template>

<script>
import PlayerName from "./PlayerName";
import BowlingFrame from "./BowlingFrame";

export default {
  components: {
    "player-name": PlayerName,
    "bowling-frame": BowlingFrame
  },
  props: {
    playerName: {
      type: String
    }
  }
};
</script>
