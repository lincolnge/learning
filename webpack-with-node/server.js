"use strict";

const Webpack = require("../node_modules/webpack");
const WebpackDevServer = require("../node_modules/webpack-dev-server/");
const webpackConfig = require("./webpack.config.node");

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
	stats: {
		colors: true
	}
});

server.listen(8080, "127.0.0.1", function() {
	console.log("Starting server on http://localhost:8080");
});
