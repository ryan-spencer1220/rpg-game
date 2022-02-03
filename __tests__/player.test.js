import PlayerSelect from "../src/js/player";

describe("PlayerSelect", () => {
  let myPlayer;
  beforeEach(() => {
    myPlayer = new PlayerSelect("Ryan", "Agility");
  });

  it("should create a new player with a name and a skill type", () => {
    expect(myPlayer.name).toEqual("Ryan");
    expect(myPlayer.skill).toEqual("Agility");
  });
});
