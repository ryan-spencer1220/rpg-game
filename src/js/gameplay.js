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

  levelTwoRoute(myChoice) {
    switch (this.firstLevelRoute) {
      case "Fire":
        if (myChoice === "Woods") {
          this.secondLevelRoute = "Woods";
          return true;
        } else if (myChoice === "Town") {
          this.secondLevelRoute = "Town";
          return true;
        } else {
          this.secondLevelRoute = "Volcano";
          return false;
        }
      case "Water":
        if (myChoice === "Beach") {
          this.secondLevelRoute = "Beach";
          return true;
        } else if (myChoice === "Lake") {
          this.secondLevelRoute = "Lake";
          return true;
        } else {
          this.secondLevelRoute = "Hurricane";
          return false;
        }
    }
  }
  levelThreeRoute(myChoice) {
    switch (this.firstLevelRoute) {
      case "Fire":
        if (this.secondLevelRoute === "Woods") {
          if (myChoice === "Axe") {
            this.thirdLevelRoute = "Axe";
            return false;
          } else {
            this.thirdLevelRoute = "Water";
            return true;
          }
        } else {
          if (myChoice === "Axe") {
            this.thirdLevelRoute = "Axe";
            return false;
          } else {
            this.thirdLevelRoute = "Water";
            return true;
          }
        }
      case "Water":
        if (this.secondLevelRoute === "Beach") {
          if (myChoice === "Axe") {
            this.thirdLevelRoute = "Axe";
            return true;
          } else {
            this.thirdLevelRoute = "Water";
            return false;
          }
        } else {
          if (myChoice === "Axe") {
            this.thirdLevelRoute = "Axe";
            return true;
          } else {
            this.thirdLevelRoute = "Water";
            return false;
          }
        }
    }
  }
}
