module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' }
    };
  },
  webpack: function(config) {
    require.extensions['.css'] = () => {
      return;
    };
    config.module.rules = (config.module.rules || []).concat({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: [/flexboxgrid/, /react-flexbox-grid-plus/]
    });
    return config;
  }
};
