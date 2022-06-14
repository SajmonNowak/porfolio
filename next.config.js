module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
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

