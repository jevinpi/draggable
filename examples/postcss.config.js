module.exports = () => ({
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: 'advanced',
      autoprefixer: false,
    },
  },
});
