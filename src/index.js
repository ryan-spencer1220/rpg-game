import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import PlayerSelect from "./js/player.js";
import GamePlay from "./js/gameplay.js";

let myGame = new GamePlay();

$(document).ready(function () {
  $("#start-game").click(function () {
    const name = $("#player-name").val();
    const skill = $("#player-skill").val();
    const newPlayer = new PlayerSelect(name, skill);
    myGame.player = newPlayer;
    $("#starting-level-row").slideUp(300);
    $("#level-one-row").slideDown(300);
    $("#option-one").text("Fire");
    $("#option-two").text("Water");
    $("#option-three").text("Neither");
  });
  $("#option-one").click(function () {
    myGame.levelOneRoute("Fire");
    $("#level-one-row").hide();
    $("#level-two-row").show();
    $("#L2-message").prepend(myGame.currentLevelMessage);
    $("#L2-option-one").text(myGame.currentLevelChoices[0]);
    $("#L2-option-two").text(myGame.currentLevelChoices[1]);
    $("#L2-option-three").text(myGame.currentLevelChoices[2]);
  });
  $("#option-two").click(function () {
    myGame.levelOneRoute("Water");
    $("#level-one-row").hide();
    $("#level-two-row").show();
    $("#L2-message").prepend(myGame.currentLevelMessage);
    $("#L2-option-one").text(myGame.currentLevelChoices[0]);
    $("#L2-option-two").text(myGame.currentLevelChoices[1]);
    $("#L2-option-three").text(myGame.currentLevelChoices[2]);
  });
  $("#option-three").click(function () {
    myGame.levelOneRoute("Neither");
    $("#L2-message").text(myGame.currentLevelMessage);
    $("#level-one-row").hide();
    $("#level-two-row").show();
    $("#L2-option-one").hide();
    $("#L2-option-two").hide();
    $("#L2-option-three").hide();
  });
  $("#L2-option-one").click(function () {
    myGame.levelTwoRoute(myGame.currentLevelChoices[0]);
    $("#L3-message").prepend(myGame.currentLevelMessage);
    $("#level-two-row").hide();
    $("#level-three-row").show();
    $("#L3-option-one").text(myGame.currentLevelChoices[0]);
    $("#L3-option-two").text(myGame.currentLevelChoices[1]);
  });
  $("#L2-option-two").click(function () {
    myGame.levelTwoRoute(myGame.currentLevelChoices[1]);
    $("#L3-message").prepend(myGame.currentLevelMessage);
    $("#level-two-row").hide();
    $("#level-three-row").show();
    $("#L3-option-one").text(myGame.currentLevelChoices[0]);
    $("#L3-option-two").text(myGame.currentLevelChoices[1]);
  });
  $("#L2-option-three").click(function () {
    myGame.levelTwoRoute(myGame.currentLevelChoices[2]);
    $("#L3-message").text(myGame.currentLevelMessage);
    $("#level-one-row").hide();
    $("#level-two-row").hide();
    $("#level-three-row").show();
    $("#L3-option-one").hide();
    $("#L3-option-two").hide();
    $("#L3-option-three").hide();
  });
  $("#L3-option-one").click(function () {
    myGame.levelThreeRoute(myGame.currentLevelChoices[0]);
    $("#final-message").prepend(myGame.currentLevelMessage);
    $("#level-three-row").hide();
    $("#final-row").show();
  });
  $("#L3-option-two").click(function () {
    myGame.levelThreeRoute(myGame.currentLevelChoices[1]);
    $("#final-message").prepend(myGame.currentLevelMessage);
    $("#level-three-row").hide();
    $("#final-row").show();
  });
});
