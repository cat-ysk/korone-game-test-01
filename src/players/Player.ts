import * as Phaser from "phaser";

import Keys from "./Keys";
import { CONST } from "../const";

const JUMP_VELOCITY = 150;

export default class Player extends Phaser.GameObjects.Sprite {
  static readonly KEY = "player";
  moveSpeed: integer = 100;

  sprite: Phaser.Physics.Arcade.Sprite;
  body: Phaser.Physics.Arcade.Body;
  state: PlayerState = PlayerState.stand;
  keys: Keys;

  static preload(scene) {
    scene.load.atlas(
      this.KEY,
      "assets/player/krn2.png",
      "assets/player/krn2.json"
    );
  }

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, Player.KEY);
    this.createAnims();
    this.keys = new Keys(scene);
    this.scene.add.existing(this);
  }

  update() {
    this.body.setVelocity(0, 0);

    if (this.keys.pressUp()) {
      this.anims.play("B", true);
      this.body.velocity.y = -this.moveSpeed;
    } else if (this.keys.pressDown()) {
      this.anims.play("F", true);
      this.body.velocity.y = this.moveSpeed;
    } else if (this.keys.pressLeft()) {
      this.body.velocity.x = -this.moveSpeed;
      this.anims.play("L", true);
    } else if (this.keys.pressRight()) {
      this.body.velocity.x = this.moveSpeed;
      this.anims.play("R", true);
    } else {
      this.anims.stop();
    }
  }

  createAnims() {
    this.scene.anims.create({
      key: "B",
      frames: this.scene.anims.generateFrameNames(Player.KEY, {
        prefix: "B",
        end: 3,
      }),
      repeat: -1,
    });
    this.scene.anims.create({
      key: "F",
      frames: this.scene.anims.generateFrameNames(Player.KEY, {
        prefix: "F",
        end: 3,
      }),
      repeat: -1,
    });
    this.scene.anims.create({
      key: "L",
      frames: this.scene.anims.generateFrameNames(Player.KEY, {
        prefix: "L",
        end: 3,
      }),
      repeat: -1,
    });
    this.scene.anims.create({
      key: "R",
      frames: this.scene.anims.generateFrameNames(Player.KEY, {
        prefix: "R",
        end: 3,
      }),
      repeat: -1,
    });
  }
}

const PlayerState = {
  stand: 0,
  jump: 1,
} as const;
type PlayerState = typeof PlayerState[keyof typeof PlayerState];
