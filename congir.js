const path = require("path");

module.exports = {
  target: "web",
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true, excludeWarnings: true })
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".html", ".vue", ".scss"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@lists": path.resolve(__dirname, "src/components/lists/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@forms": path.resolve(__dirname, "src/components/forms/"),
      "@inputs": path.resolve(__dirname, "src/components/inputs/"),
      "@cards": path.resolve(__dirname, "src/components/cards/"),
      "@views": path.resolve(__dirname, "src/views/"),
      "@utils": path.resolve(__dirname, "src/utils/")
    }
  }
};
