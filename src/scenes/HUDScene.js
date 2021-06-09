import { COLORS, FONT } from '../constants/style.js';
import { SCENE_KEYS, HUD_SCENE } from '../constants/scenes.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super(SCENE_KEYS.hud);
    }

    init(data) {
        this.data = data;
        this.gameScene = data.gameScene;
    }

    create() {
        // Reposition objects when the screen is resized.
        this.scale.on('resize', this.resize, this);

        // Remove the resize event for this scene when the scene stops.
        this.events.on('shutdown', () => {
            this.scale.off('resize', this.resize);
        });

        this.font = FONT.main;

        // Add text to display loading information.
        this.timeText = this.add.text(
            HUD_SCENE.timeText.offset.x,
            HUD_SCENE.timeText.offset.y + FONT[this.font].offset.y,
            'Time Left:',
            { font: '48px ' + this.font, fill: COLORS.text});
        this.timeText.setOrigin(0, 0.5);
    }

    update() {
        // Round the remaining time in seconds to 1 decimal place.
        let remainingSeconds = this.gameScene.endTimer.getRemainingSeconds().toFixed(1);
        this.timeText.text = 'Time Left: ' + remainingSeconds;
    }

    resize() {
        this.timeText.setPosition(
            HUD_SCENE.timeText.offset.x,
            HUD_SCENE.timeText.offset.y + FONT[this.font].offset.y
        );
    }
}