<template>
  <div class="frame">
    <div class="rolls">
      <template v-if="isStrike()">
        <div class="first-roll">
          X
        </div>
      </template>
      <template v-else-if="isSpare()">
        <div class="first-roll">
          {{rolls[0]}}
        </div>
        <div class="second-roll">\</div>
      </template>
      <template v-else>
        <div class="first-roll">{{rolls[0]}}</div>
        <div
          v-if="rolls.length === 2 && rolls[1] !== 0"
          class="second-roll"
        >{{rolls[1]}}</div>
        <div
          v-else
          class="second-roll"
        >-</div>

      </template>
    </div>

    <div class="frame-score">{{frameScore}}</div>
  </div>
</template>

<script>
import BowlingScoreBoard from "../utils/bowling";

export default {
  props: {
    rolls: {
      type: Array,
      required: true
    },
    frameType: {
      type: String,
      required: true
    },
    frameScore: {
      type: Number,
      required: false
    }
  },
  methods: {
    isStrike() {
      if (this.frameType === BowlingScoreBoard.FrameTypes.STRIKE) {
        return true;
      } else {
        return false;
      }
    },
    isSpare() {
      if (this.frameType === BowlingScoreBoard.FrameTypes.SPARE) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style>
.frame {
  border-left: solid 1px #353597;
  border-right: none;
  color: white;
  height: 5rem;
  font-size: 1.2rem;
  display: inline-block;
}

.rolls {
  display: flex;
}

.first-roll {
  text-align: center;
  flex-basis: 50%;
}

.second-roll {
  flex-basis: 50%;
  background-color: purple;
  text-align: center;
}

.frame-score {
  text-align: center;
  font-size: 2rem;
  padding: 0;
}

.lastFrame {
  border-right: solid 1px #000;
}
</style>

