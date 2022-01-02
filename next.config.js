module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.webm/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    return config;
  },
};
