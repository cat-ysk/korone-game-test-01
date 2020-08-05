import * as Phaser from "phaser";

export const KEY_PLAYER = "player";

export default class Player extends Phaser.GameObjects.Sprite {
  static readonly KEY = "player";
  readonly walkFrameRate = 30;
  sprite: Phaser.Physics.Arcade.Sprite;
  body: Phaser.Physics.Arcade.Body;

  static preload(scene) {
    scene.load.spritesheet(this.KEY, "assets/player.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, KEY_PLAYER);
    this.scene.add.existing(this);
    this.createAnims();
  }

  createAnims() {
    this.scene.anims.create({
      key: "right",
      frames: this.scene.anims.generateFrameNumbers(KEY_PLAYER, {
        start: 0,
        end: 3,
      }),
      frameRate: this.walkFrameRate,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "left",
      frames: this.scene.anims.generateFrameNumbers(KEY_PLAYER, {
        start: 0,
        end: 3,
      }),
      frameRate: this.walkFrameRate,
      repeat: -1,
    });
  }
}
