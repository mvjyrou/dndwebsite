module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,json,css,html,png,jpg}'
	],
	swDest: 'sw.js',
	maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};