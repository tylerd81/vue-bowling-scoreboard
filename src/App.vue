<template>
  <div id="app">
    <h1>Bowling Scoreboard</h1>
    <div>
      <player-name player-name="Tyler"></player-name>
      <bowling-frame
        v-for="n in 10"
        :class="{lastFrame: n == 10}"
        :rolls="rolls"
        :total-score="totalScore"
      ></bowling-frame>
    </div>

    <div
      :class="{'current-player': true}"">
      <player-name player-name="
      Sarge"
    >
      </player-name>
      <bowling-frame
        v-for="n in 10"
        :class="{lastFrame: n == 10}"
        :rolls="rolls"
        :total-score="totalScore"
      ></bowling-frame>
    </div>
  </div>
</template>

<script>
import BowlingFrame from "./components/BowlingFrame.vue";
import PlayerName from "./components/PlayerName.vue";

export default {
  components: {
    "bowling-frame": BowlingFrame,
    "player-name": PlayerName
  },
  data() {
    return {
      rolls: [{ type: "open", roll: 5 }, { type: "open", roll: 2 }],
      totalScore: 7
    };
  }
};
</script>

<style>
.current-player {
  background-color: lightcoral;
}
</style>
