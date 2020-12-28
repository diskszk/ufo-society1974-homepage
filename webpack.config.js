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
        use: [
          "ts-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
};
