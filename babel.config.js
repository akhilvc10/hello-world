module.exports = {
  plugins: ['babel-plugin-transform-import-meta'],
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ],
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ]
};
