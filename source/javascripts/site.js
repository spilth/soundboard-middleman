// From https://github.com/CreateJS/SoundJS/blob/master/examples/02_PlayOnClick.html

function init(sounds) {
    createjs.defaultInterruptBehavior = createjs.Sound.INTERRUPT_ANY;
    createjs.Sound.registerSounds(sounds, "/sounds/", 0);
}

function playSound(soundID) {
    createjs.Sound.play(soundID);
}

function stopSounds() {
    createjs.Sound.stop();
}