export default class GamePlay {
  constructor() {
    this.currentLevel = 0;
    this.firstLevelRoute = 0;
    this.secondLevelRoute = 0;
    this.thirdLevelRoute = 0;
    this.player = {};
  }
  levelOneRoute(myChoice) {
    switch (myChoice) {
      case "Fire":
        this.firstLevelRoute = "Fire";
        this.currentLevelMessage =
          "You've chosen Fire! What will you choose next? Woods or Town or Volcano?";
        this.currentLevelChoices = ["Woods", "Town", "Volcano"];
        return true;
      case "Water":
        this.firstLevelRoute = "Water";
        this.currentLevelMessage =
          "You've chosen Water! What will you choose next? Beach or Lake or Hurricane?";
        this.currentLevelChoices = ["Beach", "Lake", "Hurricane"];
        return true;
      default:
        this.firstLevelRoute = "Neither";
        this.currentLevelMessage = "Game Over! You have to fight!";
        return false;
    }
  }

  levelTwoRoute(myChoice) {
    switch (this.firstLevelRoute) {
      case "Fire":
        if (myChoice === "Woods") {
          this.secondLevelRoute = "Woods";
          this.currentLevelMessage =
            "You've chosen to fight in the woods and have encountered a monster! What will you choose to fight the wood monster with? Axe or Water?";
          this.currentLevelChoices = ["Axe", "Water"];
          return true;
        } else if (myChoice === "Town") {
          this.secondLevelRoute = "Town";
          this.currentLevelMessage =
            "You've chosen to fight in the the town and have encountered a monster! What will you choose to fight the town monster with? Axe or Water?";
          this.currentLevelChoices = ["Axe", "Water"];
          return true;
        } else {
          this.secondLevelRoute = "Volcano";
          this.currentLevelMessage = "Game Over! You died in the volcano!";
          return false;
        }
      case "Water":
        if (myChoice === "Beach") {
          this.secondLevelRoute = "Beach";
          this.currentLevelMessage =
            "You've chosen to fight at the beach and have encountered a monster! What will you choose to fight the beach monster with? Axe or Water?";
          this.currentLevelChoices = ["Axe", "Water"];
          return true;
        } else if (myChoice === "Lake") {
          this.secondLevelRoute = "Lake";
          this.currentLevelMessage =
            "You've chosen to fight at the lake and have encountered a monster! What will you choose to fight the lake monster with? Axe or Water?";
          this.currentLevelChoices = ["Axe", "Water"];
          return true;
        } else {
          this.secondLevelRoute = "Hurricane";
          this.currentLevelMessage = "Game Over! You died in the hurricane!";
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
            this.currentLevelMessage =
              "You've chosen to fight the monster with an Axe! Unfortunately you have died!";
            return false;
          } else {
            this.thirdLevelRoute = "Water";
            this.currentLevelMessage =
              "You've chosen to fight the monster with water. Great choice! You've won!";
            return true;
          }
        } else {
          if (myChoice === "Axe") {
            this.thirdLevelRoute = "Axe";
            this.currentLevelMessage =
              "You've chosen to fight the monster with an Axe! Unfortunately you have died!";
            return false;
          } else {
            this.thirdLevelRoute = "Water";
            this.currentLevelMessage =
              "You've chosen to fight the monster with water. Great choice! You've won!";
            return true;
          }
        }
      case "Water":
        if (this.secondLevelRoute === "Beach") {
          if (myChoice === "Axe") {
            this.thirdLevelRoute = "Axe";
            this.currentLevelMessage =
              "You've chosen to fight the monster with an axe. Great choice! You've won!";
            return true;
          } else {
            this.thirdLevelRoute = "Water";
            this.currentLevelMessage =
              "You've chosen to fight the monster with water. Unfortunately you have died!";
            return false;
          }
        } else {
          if (myChoice === "Axe") {
            this.thirdLevelRoute = "Axe";
            this.currentLevelMessage =
              "You've chosen to fight the monster with an axe. Great choice! You've won!";
            return true;
          } else {
            this.thirdLevelRoute = "Water";
            this.currentLevelMessage =
              "You've chosen to fight the monster with water. Unfortunately you have died!";
            return false;
          }
        }
    }
  }
}
