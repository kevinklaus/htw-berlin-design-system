const path = require("path");

module.exports = async ({ config }) => {
  // fonts
  config.module.rules.push({
    test: /\.(ttf)$/,
    use: [
      {
        loader: "file-loader",
        query: {
          name: "[name].[ext]",
        },
      },
    ],
    include: path.resolve(__dirname, "../"),
  });

  return config;
};
