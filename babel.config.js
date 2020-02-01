module.exports = {
  presets: ['@babel/preset-env', '@vue/babel-preset-jsx'],
  plugins: ['@vue/transform-vue-jsx'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime', 'require-context-hook'],
    },
  },
};
