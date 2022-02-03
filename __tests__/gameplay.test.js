import GamePlay from "../src/js/gameplay.js";

describe("GamePlay", () => {
  let myGame;
  beforeEach(() => {
    myGame = new GamePlay();
  });

  it("should create a game with all level vals set to 0", () => {
    expect(myGame.currentLevel).toEqual(0);
    expect(myGame.firstLevelRoute).toEqual(0);
    expect(myGame.secondLevelRoute).toEqual(0);
    expect(myGame.thirdLevelRoute).toEqual(0);
  });
});
