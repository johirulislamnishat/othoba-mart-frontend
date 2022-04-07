const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  modifyVars: {
    "@primary-color": "#f66a05",
    "@primary-color-hover": "#f24908",
    "@link-color": "f66a05",
    "@link-hover-color": "#f24908",
    "@link-active-color": "@primary-color",
    // input
    "@border-radius-base": "0.1rem",
    "@input-placeholder-color": "rgb(133 148 165)",
    "@input-border-color": "rgb(194 201 210)",
    // button
    "@btn-font-weight": "500",
    "@btn-border-radius-base": "0.375rem",
  },

  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
});
