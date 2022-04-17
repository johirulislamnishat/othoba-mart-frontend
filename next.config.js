const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
	lessVarsFilePath: "./styles/variables.less",
	lessVarsFilePathAppendToEndOfContent: false,
	cssLoaderOptions: {
		mode: "local",
		exportLocalsConvention: "camelCase",
		exportOnlyLocals: false,

		getLocalIdent: (context, localIdentName, localName, options) => {
			return "whatever_random_class_name";
		},
	},

	nextjs: {
		localIdentNameFollowDev: true,
	},

	// Other Config Here...

	webpack(config) {
		return config;
	},
});
