<template>
  <div class="frame">
    <div class="rolls">
      <div class="first-roll">{{getRoll(0)}}</div>
      <div class="second-roll">{{getRoll(1)}}</div>
    </div>

    <div class="total-score">{{totalScore}}</div>
  </div>
</template>

<script>
export default {
  props: ["rolls", "totalScore"],
  methods: {
    getRoll(rollNum) {
      if (rollNum < this.rolls.length) {
        switch (this.rolls[rollNum].type) {
          default:
            return this.rolls[rollNum].roll;
        }
      }
    }
  }
};
</script>
<style>
.frame {
  border: solid 1px #000;
  border-right: none;
  border-bottom: none;
  height: 3.5rem;
  width: 3.5rem;
  font-size: 1.5rem;
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
  border-bottom: solid 1px #000;
  border-left: solid 1px #000;
  text-align: center;
}

.total-score {
  text-align: center;
}

.lastFrame {
  border-right: solid 1px #000;
}
</style>

