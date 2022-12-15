var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const scriptsEntry = {
	'scripts/main': './resources/js/main.js'
}

Encore
	.addPlugin(
		new CopyWebpackPlugin([
			{from: './resources/images', to: './images'},
			{from: './resources/vendor', to: './vendor'},
		], {})
	)


Encore
    .enableVersioning(false)
	.setOutputPath('assets/')
	.setPublicPath('/')

if (!Encore.isProduction())
	Encore.cleanupOutputBeforeBuild();


// Styles
if (Encore.isProduction()) {
	for (var outputFile in stylesEntry) {
		Encore
			.addStyleEntry(outputFile + '.min', stylesEntry[outputFile]);
	}
} else {
	for (var outputFile in stylesEntry) {
		Encore
			.addStyleEntry(outputFile, stylesEntry[outputFile])
			.enableSourceMaps(!Encore.isProduction());
	}
}

Encore.enableSassLoader(sassLoaderOptionsCallback = () => {}, {
    resolveUrlLoader: false
});

// Scripts

if (Encore.isProduction()) {
    for (var outputFile in scriptsEntry) {
        Encore
            .addEntry(outputFile + '.min', scriptsEntry[outputFile]);
    }
} else {
    for (var outputFile in scriptsEntry) {
        Encore
            .addEntry(outputFile, scriptsEntry[outputFile]);
    }
}

Encore.enablePostCssLoader((options) => {
	options.config = {
		path: './postcss.config.js'
	};
});

Encore.autoProvideVariables({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
	Popper: ['popper.js', 'default']
})

// Edit webpack config
const webpackConfig = Encore.getWebpackConfig();
if (webpackConfig.module && webpackConfig.module.rules) {
	for (const rule of webpackConfig.module.rules) {
		if (rule.use) {
			for (const loader of rule.use) {
				if (loader.loader === 'babel-loader') {
					rule.exclude = /node_modules\/(?!bootstrap\/).*/;
				}
			}
		}
	}
}

module.exports = webpackConfig;
