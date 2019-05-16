<template>
  <div id="app">
    <score-board-header></score-board-header>
    <bowler
      player-name="Tyler"
      :score-board="scoreBoard"
    ></bowler>

  </div>
</template>

<script>
// import BowlingFrame from "./components/BowlingFrame.vue";
// import PlayerName from "./components/PlayerName.vue";
import Bowler from "./components/Bowler";
import ScoreBoardHeader from "./components/ScoreBoardHeader";
import BowlingScoreBoard from "./utils/bowling";

export default {
  components: {
    bowler: Bowler,
    "score-board-header": ScoreBoardHeader
  },
  data() {
    return {
      rolls: [{ type: "open", roll: 5 }, { type: "open", roll: 2 }],
      totalScore: 7,
      currentPlayer: false,
      scoreBoard: {}
    };
  },
  created() {
    this.scoreBoard = new BowlingScoreBoard();
    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.STRIKE, rolls: [10] },
      0
    );
    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.SPARE, rolls: [7, 3] },
      1
    );
    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.OPEN, rolls: [7, 2] },
      2
    );

    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.SPARE, rolls: [9, 1] },
      3
    );

    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.STRIKE, rolls: [10] },
      4
    );
    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.STRIKE, rolls: [10] },
      5
    );
    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.STRIKE, rolls: [10] },
      6
    );
    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.OPEN, rolls: [2, 3] },
      7
    );

    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.SPARE, rolls: [6, 4] },
      8
    );

    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.SPARE, rolls: [7, 3] },
      9
    );

    this.scoreBoard.addFrame(
      { type: BowlingScoreBoard.FrameTypes.BONUS, rolls: [3] },
      10
    );
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
