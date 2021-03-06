import { SceneKey as MenuScene } from '@/scenes/MenuScene';

export const SceneKey = 'HelpScene';

export default class HelpScene extends Phaser.Scene {
  constructor() {
    super({ key: SceneKey });
  }

  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    const height = this.game.renderer.height;
    const width = this.game.renderer.width;

    const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
    background.setScale(width / background.displayWidth, height / background.displayHeight);

    this.add
      .text(width * 0.5, height * 0.2, 'USE W, A, S, D to move player 1')
      .setScale(3)
      .setShadow(3, 1, 'black', 2, true, true)
      .setOrigin(0.5);

    this.add
      .text(width * 0.5, height * 0.3, 'USE Q to grab the ball, E to throw')
      .setScale(3)
      .setShadow(3, 1, 'black', 2, true, true)
      .setOrigin(0.5);

    this.add
      .text(width * 0.5, height * 0.4, 'USE UP, DOWN, LEFT, RIGHT to move player 2')
      .setScale(3)
      .setShadow(3, 1, 'black', 2, true, true)
      .setOrigin(0.5);

    this.add
      .text(width * 0.5, height * 0.5, 'USE K to grab the ball, L to throw')
      .setScale(3)
      .setShadow(3, 1, 'black', 2, true, true)
      .setOrigin(0.5);

    this.add
      .text(width * 0.5, height * 0.7, 'First player that hits 100 points wins')
      .setScale(3)
      .setShadow(3, 1, 'black', 2, true, true)
      .setOrigin(0.5);

    this.add
      .text(width * 0.5, height * 0.8, 'BACK')
      .setScale(3)
      .setShadow(3, 1, 'black', 2, true, true)
      .setOrigin(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.stop();
        this.scene.wake(MenuScene);
      });
  }
}
