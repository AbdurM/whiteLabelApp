const brandPath = `./src/brands/${process.env.APP_BRAND}`;

console.log(`Bundling for the brand: ${process.env.APP_BRAND}`);

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src', brandPath, './src/brands/default']
    }]
  ]
};