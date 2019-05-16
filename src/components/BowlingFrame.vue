<template>
  <div class="frame">
    <div class="rolls">
      <div class="first-roll">{{getRoll(firstRoll)}}</div>
      <div class="second-roll">{{getRoll(secondRoll)}}</div>
    </div>

    <div class="frame-score">{{frameScore}}</div>
  </div>
</template>

<script>
export default {
  props: ["firstRoll", "secondRoll", "frameScore"],
  methods: {
    getRoll(roll) {
      if (roll.type === "spare") {
        return "/";
      } else {
        return roll.pins;
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

