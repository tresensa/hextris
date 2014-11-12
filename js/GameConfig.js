var GameConfig = {

	PROD_ENV: true,

	LOG_LEVEL: 3,

	GAME_ID: 'hextris',
	TITLE: 'Hextris',
	VERSION: '1.0.4',

	ORIENTATION: 'portrait',

	SOURCE: [
		"vendor/hammer.min.js",
		"vendor/jsonfn.min.js",
		"vendor/keypress.min.js",
		"vendor/jquery.js",
		"js/save-state.js",
		"js/view.js",
		"js/wavegen.js",
		"js/math.js",
		"js/Block.js",
		"js/Hex.js",
		"js/Text.js",
		"js/comboTimer.js",
		"js/checking.js",
		"js/update.js",
		"js/render.js",
		"js/input.js",
		"js/main.js",
		"js/initialization.js"
	],

	EXCLUDE: [
		".gitignore",
		"CNAME",
		"index_backup.html",
		"LICENSE.md",
		"logo_android.psd",
		"README.md"
	],

	ADS: {
		DISPLAY_PLACEMENT_ID: '3304286',
		INTERSTITIAL_PLACEMENT_ID: '3304288'
	},

	TGL: {
		VERSION: '1.0'
	},

	TGS: {
		ENABLED: true,
		VERSION: '0.3'
	},

	TGE: {
		ENABLED: false,
		FONT_LOADER: false,
		VERSION: '1.0'
	},

	GoogleAnalytics: {
		QA_ID: '',
		PROD_ID: 'UA-56282521-1',
		LABEL: 'Hextris'
	}
};