import * as Phaser from "phaser";
import { GAME_TITLE, SCREEN_WIDTH, SCREEN_HEIGHT } from "./const";
import { TitleScene } from "./scenes/TitleScene";
import { GameScene } from "./scenes/GameScene";

const BGCOLOR = "#000000";
const PARENT = "game";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: GAME_TITLE,
    type: Phaser.AUTO,
    parent: PARENT,
    backgroundColor: BGCOLOR,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        },
    },
    scene: [TitleScene, GameScene],
};

export const game = new Phaser.Game(gameConfig);
