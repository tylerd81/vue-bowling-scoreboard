<template>
  <div id="app">
    <score-board-header></score-board-header>
    <bowler player-name="Tyler"></bowler>
    <bowler player-name="Sarge"></bowler>
    <bowler player-name="Ms. Brandi"></bowler>
    <!-- <div>
      <player-name>Tyler</player-name>
      <bowling-frame
        v-for="n in 10"
        :class="{lastFrame: n == 10}"
        :rolls="rolls"
        :total-score="totalScore"
      ></bowling-frame>
    </div>

    <div :class="{'current-player': true}">
      <player-name player-name>
        Sarge
      </player-name>
      <bowling-frame
        v-for="n in 10"
        :class="{lastFrame: n == 10}"
        :rolls="rolls"
        :total-score="totalScore"
      >
      </bowling-frame>
    </div> -->
  </div>
</template>

<script>
// import BowlingFrame from "./components/BowlingFrame.vue";
// import PlayerName from "./components/PlayerName.vue";
import Bowler from "./components/Bowler";
import ScoreBoardHeader from "./components/ScoreBoardHeader";

export default {
  components: {
    bowler: Bowler,
    "score-board-header": ScoreBoardHeader
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
