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

  public preload() {}

  public create() {
    this.showPushAnyKeyText();

    // this.input.keyboard.once("keyup", (e) => {
    //   this.scene.start("Game");
    // });
    this.scene.start("Game");
  }

  private showPushAnyKeyText() {
    const txt = "Push any key.";
    this.text = this.add.text(SCREEN_WIDTH / 2, SCREEN_HEIGHT - 100, txt, {
      fontSize: "24px",
      fontFamily: FONT_10,
    });
    this.text.setAlign("center").setOrigin(0.5);
    this.add.existing(this.text);
  }
}
