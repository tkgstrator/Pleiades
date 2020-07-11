module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === "production"
    ? "/Pleiades/"
    : "/",
  productionSourceMap: false,
  assetsDir: "",
  outputDir: "./dist"
}