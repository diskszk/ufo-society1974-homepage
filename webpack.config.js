const path = require("path");
const PUBLIC_DIR = path.resolve(__dirname, "public");
const dotenv = require("dotenv");
const { DefinePlugin } = require("webpack");

const env = dotenv.config().parsed;
module.exports = {
  mode: "development",

  entry: `${PUBLIC_DIR}/src/index.tsx`,
  output: {
    path: `${__dirname}/public/dist`,
    publicPath: "/dist/",
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
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
  ],
  target: ["web", "es5"],
  devServer: {
    hot: true,
    port: 3000,
  },
};
