import * as Phaser from "phaser";
import { CONST } from "./const";
import { TitleScene } from "./scenes/TitleScene";
import { GameScene } from "./scenes/GameScene";

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: CONST.gameTitle,
  type: Phaser.AUTO,
  parent: CONST.parentElement,
  backgroundColor: "#000000",
  width: CONST.screenWidth,
  height: CONST.screenHeight,
  render: {
    pixelArt: true,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    zoom: CONST.zoom,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: CONST.gravity,
      },
      debug: true,
    },
  },
  scene: [TitleScene, GameScene],
};

export const game = new Phaser.Game(gameConfig);
