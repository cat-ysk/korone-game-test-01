import Player from "../players/Player";

import { CONST } from "../const";
import { TextButton } from "../ui/TextButton";
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
};

export class GameScene extends Phaser.Scene {
  private player1: Player;
  private player2: Player;
  private player3: Player;
  clickCount: integer = 0;
  clickButton: TextButton;

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.load.image("loop", "assets/loop.png");
    this.load.image("obj", "assets/obj.png");
    Player.preload(this);
  }

  public create() {
    this.cameras.main.setBackgroundColor("#69aB6B");

    // this.make
    //   .tileSprite({
    //     x: 0,
    //     y: CONST.screenHeight - 200,
    //     key: "loop",
    //     add: true,
    //   })
    //   .setOrigin(0);
    this.player1 = new Player(this, 80, CONST.screenHeight - 80);
    this.player2 = new Player(this, 120, CONST.screenHeight - 80);
    this.player3 = new Player(this, 180, CONST.screenHeight - 80);
    this.player2.scale = 2;
    this.player3.scale = 3;
    this.physics.world.enable([this.player1, this.player2, this.player3]);
    // this.player1.body.setCollideWorldBounds(true);

    this.clickButton = new TextButton(
      this,
      100,
      100,
      "テストボタン",
      { fill: "#0f0" },
      () => {
        this.clickCount += 1;
      }
    );
    this.add.existing(this.clickButton);
  }

  public update() {
    this.player1.update();
    this.player2.update();
    this.player3.update();
  }
}
