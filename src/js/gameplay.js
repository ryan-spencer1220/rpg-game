export default class GamePlay {
  constructor() {
    this.currentLevel = 0;
    this.firstLevelRoute = 0;
    this.secondLevelRoute = 0;
    this.thirdLevelRoute = 0;
  }
  levelOneRoute(myChoice) {
    switch (myChoice) {
      case "Fire":
        this.firstLevelRoute = "Fire";
        return true;
      case "Water":
        this.firstLevelRoute = "Water";
        return true;
      default:
        this.firstLevelRoute = "Neither";
        return false;
    }
  }
}

/* you make a choice, fire or water
currentLevel is set to 1
firstLevelRoute is set to fire/water

UI logic checks to see what current level is
if 1, checks to see if fire or water
presents options 




*/
