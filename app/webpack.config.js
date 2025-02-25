const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    global: path.resolve(__dirname, "global.js"), // Global scripts/styles
    index: path.resolve(__dirname, "index.js"), // Main entry point
    // listProducts: "./list-products.js", // Uncomment if needed
    // addProducts: "./add-products.js", // Uncomment if needed
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "assets/[hash][ext][query]", // Output assets
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Process SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          "css-loader", // Translates CSS into CommonJS
          {
            loader: "sass-loader", // Compiles SCSS to CSS
            options: {
              sassOptions: {
                quietDeps: true,
                includePaths: [path.resolve(__dirname, "node_modules")],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: "babel-loader", // Use Babel for JavaScript
      },
      {
        test: /\.(png|jpg|gif)$/, // Process image files
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][hash][ext][query]", // Output images
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf)$/, // Process font files
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][hash][ext][query]", // Output fonts
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[index].css", // Output CSS file
    }),
    new HtmlWebpackPlugin({
      template: "./index.html", // Use index.html as a template
      chunks: ["global", "index"], // Include these chunks
      filename: "index.html", // Output HTML file
    }),
    // Uncomment if needed:
    // new HtmlWebpackPlugin({
    //   template: "./list-products.html",
    //   chunks: ["listProducts", "global"],
    //   filename: "list-products.html",
    // }),
    // new HtmlWebpackPlugin({
    //   template: "./add-products.html",
    //   chunks: ["addProducts", "global"],
    //   filename: "add-products.html",
    // }),
  ],
  optimization: {
    minimize: true, // Minimize output
    minimizer: [
      `...`, // Use default minimizers
      new CssMinimizerPlugin(), // Minimize CSS
    ],
  },
  devServer: {
    static: "./dist", // Serve files from the dist directory
    port: 9000, // Port for the development server
    open: true, // Open the browser automatically
    hot: true, // Enable hot module replacement
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "assets"), // Alias for assets
    },
    extensions: [".js", ".scss"], // Resolve these extensions
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};