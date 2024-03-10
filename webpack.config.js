module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "ts-loader" },
      {
        test: /\.(mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/audio/", // Specify the output directory for MP3 files
          },
        },
      },
    ],
  },
};
