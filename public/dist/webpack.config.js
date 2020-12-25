var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");
module.exports = {
    mode: "development",
    context: path.join(__dirname, "public"),
    entry: "./dist/public/js/index.js",
    // entry: "./js/index.js",
    module: {
        rules: [
            // babel
            {
                test: /\.(j|t)sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: "ts-loader",
            },
            // CSS
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: __dirname + "/public/",
        filename: "index.min.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", "tsx"],
    },
    plugins: debug
        ? []
        : [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false,
                sourcemap: false,
            }),
        ],
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        watchContentBase: true,
    },
};
