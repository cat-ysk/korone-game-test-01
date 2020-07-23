import * as Phaser from "phaser";
import { GameScene } from "./scenes/Scene1";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Sample",
    type: Phaser.AUTO,
    parent: "game",
    backgroundColor: "#000000",

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        },
    },

    scene: GameScene,
};

export const game = new Phaser.Game(gameConfig);
