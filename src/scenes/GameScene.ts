import Player from "../players/Player";
import { CONST } from "../const";
const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
};

export class GameScene extends Phaser.Scene {
  private player: Player;
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.load.image("loop", "assets/loop.png");
    this.load.image("obj", "assets/obj.png");
    this.load.spritesheet("player", "assets/player.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  public create() {
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.cameras.main.setBackgroundColor("#56BBFB");
    this.make
      .tileSprite({
        x: 0,
        y: CONST.screenHeight - 200,
        key: "loop",
        add: true,
      })
      .setOrigin(0);
    this.player = new Player(this, 80, CONST.screenHeight - 80);
    this.physics.world.enable([this.player]);
    this.player.body.setCollideWorldBounds(true);
  }

  public update() {
    this.player.body.velocity.x = 0;

    if (this.cursorKeys.up.isDown) {
      this.player.body.velocity.y = -150;
    } else if (this.cursorKeys.down.isDown) {
      this.player.body.velocity.y = 150;
    }

    if (this.cursorKeys.right.isDown) {
      this.player.body.velocity.x = 100;
      this.player.flipX = false;
      this.player.anims.play("right", true);
    } else if (this.cursorKeys.left.isDown) {
      this.player.body.velocity.x = -100;
      this.player.flipX = true;
      this.player.anims.play("left", true);
    } else {
      this.player.anims.stop();
      if (this.player.getBounds().bottom < CONST.screenHeight) {
        this.player.setFrame(1);
      } else {
        this.player.setFrame(0);
      }
    }
  }
}
