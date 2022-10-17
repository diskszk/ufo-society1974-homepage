const path = require("path");
const PUBLIC_DIR = path.resolve(__dirname, "public");

module.exports = {
  mode: "development",

  entry: `${PUBLIC_DIR}/src/index.tsx`,
  output: {
    path: `${__dirname}/public/dist`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 3000,
  },
};
