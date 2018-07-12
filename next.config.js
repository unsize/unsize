module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/store': { page: '/store' }
    };
  },
  webpack: function(config) {
    require.extensions['.css'] = file => {
      console.log(file);
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
