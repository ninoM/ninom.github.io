BunnyDefender.Preloader = function(game) {
	this.preloadBar = null;
	this.titleText = null;
	this.ready = false;
};

BunnyDefender.Preloader.prototype = {
	preload: function() {

		this.preloadBar = this.add.sprite(this.world.centerX - 220, this.world.centerY, 'preloaderBar');
		//this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY - 220, 'titleImage');
		this.titleText.anchor.setTo(0.5, 0.5);
		this.load.image('titlescreen', 'images/TitleBG.png');
		this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
		this.load.image('hill', 'images/hill.png');
		this.load.image('sky', 'images/sky.png');
		this.load.atlasXML('bunny', 'images/spritesheets/bunny.png', 'images/spritesheets/bunny.xml');
		this.load.atlasXML('spacerock', 'images/spritesheets/SpaceRock.png', 'images/spritesheets/SpaceRock.xml');
		this.load.image('explosion', 'images/explosion.png');
		this.load.image('ghost', 'images/ghost.png');
		this.load.audio('audio_explosion', 'audio/explosion.mp3');
		this.load.audio('audio_hurt', 'audio/hurt.mp3');
		this.load.audio('audio_select', 'audio/select.mp3');
		this.load.audio('audio_background', 'audio/bgm.mp3');
	},

	create: function() {
		this.preloadBar.cropEnabled = false;
	},

	update: function() {
		if(this.cache.isSoundDecoded('audio_background') && this.ready == false) {
			this.ready = true;
			this.state.start('StartMenu');
		}
	}
};



