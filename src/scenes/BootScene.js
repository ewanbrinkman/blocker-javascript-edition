import { SCENE_KEYS } from '../constants.js';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super(SCENE_KEYS.boot);
    }

    preload() {
        this.load.image('logo', 'assets/images/ui/logo.png');
        this.load.image('bg', 'assets/images/ui/bg.png')
        this.load.image('background', 'assets/images/ui/background.png')
    }

    create() {
        this.scene.start(SCENE_KEYS.preloader);
    }
};
