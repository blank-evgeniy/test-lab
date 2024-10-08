import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpack from "webpack";

export interface BuildEnv {
  mode: "production" | "development";
}

export default (env: BuildEnv) => {
  const config = {
    //------------------build-----------------------
    mode: env.mode || "development",

    entry: path.resolve(__dirname, "src", "index.tsx"),

    output: {
      path: path.resolve(__dirname, "dist"),
    },

    devServer: {
      port: 3000,
    },

    //------------------loaders-----------------------
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
          type: "javascript/auto",
        },
      ],
    },

    //------------------resolves-----------------------
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    //------------------plugins-----------------------
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({ filename: "[name].css" }),
      new CopyWebpackPlugin({
        patterns: [{ from: "src/404.html", to: "404.html" }],
      }),
    ],
  };

  return config;
};
