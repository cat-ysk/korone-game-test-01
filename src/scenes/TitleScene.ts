import { SCREEN_WIDTH, SCREEN_HEIGHT, FONT_10 } from "../const";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Title",
};

export class TitleScene extends Phaser.Scene {
  private text: Phaser.GameObjects.Text;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.text = this.add.text(SCREEN_WIDTH / 2, SCREEN_HEIGHT - 100, "Push any key.", {
      fontSize: "24px",
      fontFamily: FONT_10,
    });
    this.text.setAlign("center").setOrigin(0.5);

    this.physics.add.existing(this.text);

    this.input.keyboard.once("keyup", (e) => {
      console.log("NEXT");
      this.scene.start("Game");
    });
  }

  public update() {}
}
