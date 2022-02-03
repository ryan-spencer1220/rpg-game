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
  it("should update first level route and return true or false based on user input", () => {
    expect(myGame.levelOneRoute("Fire")).toEqual(true);
    expect(myGame.levelOneRoute("Water")).toEqual(true);
    expect(myGame.levelOneRoute("Neither")).toEqual(false);
  });

  it("should display options based on level one value", () => {
    myGame.currentLevel = 1;
    myGame.firstLevelRoute = "Fire";
    expect(myGame.levelTwoRoute("Town")).toEqual(true);
    expect(myGame.levelTwoRoute("Woods")).toEqual(true);
    expect(myGame.levelTwoRoute("Volcano")).toEqual(false);
  });

  it("should display options based on level one value", () => {
    myGame.currentLevel = 1;
    myGame.firstLevelRoute = "Water";
    expect(myGame.levelTwoRoute("Beach")).toEqual(true);
    expect(myGame.levelTwoRoute("Lake")).toEqual(true);
    expect(myGame.levelTwoRoute("Hurricane")).toEqual(false);
  });

  //level three
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Fire";
    myGame.secondLevelRoute = "Town";
    expect(myGame.levelThreeRoute("Water")).toEqual(true);
    expect(myGame.levelThreeRoute("Axe")).toEqual(false);
  });
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Fire";
    myGame.secondLevelRoute = "Woods";
    expect(myGame.levelThreeRoute("Water")).toEqual(true);
    expect(myGame.levelThreeRoute("Axe")).toEqual(false);
  });
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Water";
    myGame.secondLevelRoute = "Beach";
    expect(myGame.levelThreeRoute("Axe")).toEqual(true);
    expect(myGame.levelThreeRoute("Water")).toEqual(false);
  });
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Water";
    myGame.secondLevelRoute = "Lake";
    expect(myGame.levelThreeRoute("Axe")).toEqual(true);
    expect(myGame.levelThreeRoute("Water")).toEqual(false);
  });
});
