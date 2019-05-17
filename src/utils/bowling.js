const _FrameTypes = {
  OPEN: "open",
  STRIKE: "strike",
  SPARE: "spare",
  BONUS: "bonus"
};

export default class BowlingScoreBoard {
  static get FrameTypes() {
    return _FrameTypes;
  }

  get Frames() {
    return [...this.frames];
  }

  constructor() {
    this.frames = [];
  }

  addFrame(frame, currentFrameNum) {
    this.frames.splice(currentFrameNum, 1, frame); // will replace frame each time

    for (let frameNum = 0; frameNum < this.frames.length; frameNum++) {
      let currFrame = this.frames[frameNum];
      let currScore = 0;
      let rolls = [];
      let nextFrame = null;

      switch (this.frames[frameNum].type) {
        case BowlingScoreBoard.FrameTypes.STRIKE:
          currScore = 10;

          // need values of next 2 rolls if they exist
          if (frameNum + 1 < this.frames.length) {
            nextFrame = this.frames[frameNum + 1];
            rolls = nextFrame.rolls;
            if (nextFrame.type === BowlingScoreBoard.FrameTypes.STRIKE) {
              currScore += 10;
              //check for next frame again
              if (frameNum + 2 < this.frames.length) {
                let nextNextFrame = this.frames[frameNum + 2];
                let rolls = nextNextFrame.rolls;
                if (rolls.length !== 0) {
                  currScore += rolls[0];
                }
              }
              currFrame.score = currScore;
            } else {
              currScore += rolls.reduce((total, score) => total + score);
              currFrame.score = currScore;
            }
          } else {
            currFrame.score = currScore;
          }
          break;

        case BowlingScoreBoard.FrameTypes.SPARE:
          currScore = 10;
          // check for value of next roll if any
          if (frameNum + 1 < this.frames.length) {
            nextFrame = this.frames[frameNum + 1];
            rolls = nextFrame.rolls;
            if (rolls.length !== 0) {
              currScore += rolls[0];
            }
          }
          currFrame.score = currScore;
          break;

        case BowlingScoreBoard.FrameTypes.OPEN:
          currFrame.score = currFrame.rolls.reduce((total, score) => total + score);
          break;

        case BowlingScoreBoard.FrameTypes.BONUS:
          // don't add the bonus roll in
          currFrame.score = 0;
          //add bonus to last frame?
          this.frames[this.frames.length - 1].score += currFrame.rolls[0];
          break;
      }

      // add score from previous frame
      if (frameNum !== 0) {
        currFrame.score += this.frames[frameNum - 1].score;
      }
    }
  }

  totalScore() {
    // the frames keep a running total, so the total score is the score of the last frame
    return this.frames[this.frames.length - 1].score;
  }

}

