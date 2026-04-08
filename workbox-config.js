module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,json,css,html,png,jpg,pagefind}'
	],
	swDest: 'sw.js',
	maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};