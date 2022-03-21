const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

const transpileDependencies = ["camelcase", "signature_pad"];
const { name } = require("./package");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "",
  // 不需要生产环境的 source map，将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  devServer: {
    open: false,
    compress: true,
    port: "8100",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  transpileDependencies,
  configureWebpack: () => {
    let options = {};
    if (process.env.NODE_ENV === "production") {
      options = {
        plugins: [
          new CompressionPlugin({
            algorithm: "gzip",
            test: /\.js$|\.html$|\.css/,
            threshold: 10240,
            deleteOriginalAssets: false,
          }),
        ],
        devtool: "none",
      };
    } else {
      options = {
        devtool: "source-map",
        output: {
          // 输出重构
          filename: `[name].${new Date().getTime()}.[hash:8].js`,
          chunkFilename: `[name].${new Date().getTime()}.[hash:8].js`,
          library: `${name}-[name]`,
          libraryTarget: "umd", // 把微应用打包成 umd 库格式
          jsonpFunction: `webpackJsonp_${name}`,
        },
      };
    }
    return options;
  },
  chainWebpack: (config) => {
    config.resolve.alias //设置别名
      .set("@", resolve("src"))
      .set("config", resolve("config"));
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/images/svg"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/images/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  },
  css: {
    extract: true,
    sourceMap: false, //css文件映射
    loaderOptions: {
      stylus: {
        import: "~@/assets/stylus/_variable.styl",
      },
    },
  },
};
