// let game1 = [
//   10,
//   7, 3,
//   7, 2,
//   9, 1,
//   10,
//   10,
//   10,
//   2, 3,
//   6, 4,
//   7, 3, 3
// ];

const FrameTypes = {
  STRIKE: "strike",
  SPARE: "spare",
  OPEN: "open",
  BONUS: "bonus",
  FOUL: "foul",
  GUTTER: "gutter"
};

// let perfectGame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 2];
// let s = [10, 7, 3, 7, 2, 9];
// let scoreBoard = calculateScore(game1);
// let scores = scoreBoard.frameScores;
// scores.forEach((frame, index) => {
//   console.log(`Frame ${index + 1}: ${frame.frameData.type} Score: ${frame.score}`);
//   console.log(frame.frameData.rolls);
// });
// if (scoreBoard.bonusRoll !== 0) {
//   console.log(`Bonus roll: ${scoreBoard.bonusRoll}`);
// }
// console.log(scoreBoard.bonusRoll);
//frameScores.forEach(frame => console.log(frame.frameData));

// calculateScore() returns an object that contains two properties:
// frameScores and bonusRoll - {frameScores: [], bonusRoll: Number}
// 
// frameScores is an array of objects: {score: Number, frameData: Object}
//  - frameData has two properties: type and rolls
//      type is the type of frame: strike, spare, open, etc.
//      rolls is an array (max length of 2) of the number of pins knocked down on each roll
//  - score is the totalscore for that frame.
//
// bonusRoll is the value of the bonus roll (if any) on the tenth frame


function calculateScore(pins) {
  let frameScores = [];
  let pinIndex = 0;

  // keep track of frame count so we don't count the bonus rolls as a separate frame.
  let frameCount = 0;
  let totalScore = 0;
  let bonusRoll = 0;

  while (pinIndex < pins.length && frameCount < 10) {
    let currScore = pins[pinIndex];  // get first roll
    let currRolls = [];
    let frameData = {};

    // save first roll
    currRolls.push(pins[pinIndex]);

    // check for a strike
    if (currScore === 10) {
      // strike, add next two rolls if it is a strike
      frameData.type = FrameTypes.STRIKE;

      if (pinIndex + 1 < pins.length) {
        currScore += pins[pinIndex + 1];

        if (pinIndex + 2 < pins.length) {
          if (frameCount === 9) {
            bonusRoll = pins[pinIndex + 2];
          }
          currScore += pins[pinIndex + 2];
        }
        totalScore += currScore;
      }
      pinIndex += 1; // move passed the strike frame
      frameCount++;
    } else {
      // just a normal roll
      // add next two rolls    
      if (pinIndex + 1 < pins.length) {
        currRolls.push(pins[pinIndex + 1]); // save next roll
        currScore += pins[pinIndex + 1];
      }

      // check for a spare after adding up the two rolls
      if (currScore === 10) {
        // add the next roll
        if (pinIndex + 2 < pins.length) {
          if (frameCount === 9) {
            bonusRoll = pins[pinIndex + 2];
          }
          currScore += pins[pinIndex + 2];
        }
        frameData.type = FrameTypes.SPARE;
      } else {
        frameData.type = FrameTypes.OPEN;
      }
      totalScore += currScore;
      pinIndex += 2;
      frameCount++;
    }
    frameData.rolls = currRolls;

    frameScores.push({ score: totalScore, frameData });
  }

  return { frameScores, bonusRoll };
}

export default {
  FrameTypes,
  calculateScore,
};