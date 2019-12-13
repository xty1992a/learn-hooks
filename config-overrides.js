const { override, addLessLoader, addWebpackAlias } = require("customize-cra");
const rewireSvgSpriteLoader = require("react-app-rewired-svg-sprite-loader");
const getLessVariables = require("./plugins/less-variable-parser");

const path = require("path");

module.exports = {
  webpack: (config, env) => {
    override(
      addLessLoader({
        modifyVars: getLessVariables("src/styles/variables.less")
      }),
      addWebpackAlias({
        "@": path.resolve(__dirname, "src"),
        api: path.resolve(__dirname, "src/api"),
        store: path.resolve(__dirname, "src/store"),
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components")
      })
    )(config, env);

    rewireSvgSpriteLoader(config, env);
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      return configFunction(
        {
          ...proxy,
          "/api": {
            target: "http://bkchina.h5.yunhuiyuan.cn",
            // target: 'http://10.107.151.163',
            changeOrigin: true,
            secure: false
          }
        },
        allowedHost
      );
    };
  }
};
