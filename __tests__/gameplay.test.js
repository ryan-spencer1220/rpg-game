import GamePlay from "../src/js/gameplay.js";
import PlayerSelect from "../src/js/player.js";

describe("GamePlay", () => {
  let myGame;
  let myPlayer = new PlayerSelect("Bob", "Intelligence");
  beforeEach(() => {
    myGame = new GamePlay();
    myGame.player = myPlayer;
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
  // Fire & Town
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Fire";
    myGame.secondLevelRoute = "Town";
    myGame.player.skill = "Accuracy";
    expect(myGame.levelThreeRoute("Water")).toEqual(true);
    expect(myGame.levelThreeRoute("Axe")).toEqual(false);
  });
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Fire";
    myGame.secondLevelRoute = "Town";
    myGame.player.skill = "Nothing";
    expect(myGame.levelThreeRoute("Water")).toEqual(false);
    expect(myGame.levelThreeRoute("Axe")).toEqual(false);
  });

  // Fire & Woods
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Fire";
    myGame.secondLevelRoute = "Woods";
    myGame.player.skill = "Nothing";
    expect(myGame.levelThreeRoute("Water")).toEqual(false);
    expect(myGame.levelThreeRoute("Axe")).toEqual(false);
  });
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Fire";
    myGame.secondLevelRoute = "Woods";
    myGame.player.skill = "Intelligence";
    expect(myGame.levelThreeRoute("Water")).toEqual(true);
    expect(myGame.levelThreeRoute("Axe")).toEqual(false);
  });

  // Water & Beach
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Water";
    myGame.secondLevelRoute = "Beach";
    myGame.player.skill = "Agility";
    expect(myGame.levelThreeRoute("Axe")).toEqual(true);
    expect(myGame.levelThreeRoute("Water")).toEqual(false);
  });
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Water";
    myGame.secondLevelRoute = "Beach";
    myGame.player.skill = "Nothing";
    expect(myGame.levelThreeRoute("Axe")).toEqual(false);
    expect(myGame.levelThreeRoute("Water")).toEqual(false);
  });

  // Water & Lake
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Water";
    myGame.secondLevelRoute = "Lake";
    myGame.player.skill = "Strength";
    expect(myGame.levelThreeRoute("Axe")).toEqual(true);
    expect(myGame.levelThreeRoute("Water")).toEqual(false);
  });
  it("should display options based on level two value", () => {
    myGame.currentLevel = 2;
    myGame.firstLevelRoute = "Water";
    myGame.secondLevelRoute = "Lake";
    myGame.player.skill = "Nothing";
    expect(myGame.levelThreeRoute("Axe")).toEqual(false);
    expect(myGame.levelThreeRoute("Water")).toEqual(false);
  });
});
