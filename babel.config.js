module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            assets: ['./src/assets'],
            components: ['./src/components'],
            elements: ['./src/elements'],
            navigation: ['./src/navigation'],
            screens: ['./src/screens'],
            utils: ['./src/utils'],
          },
        },
      ],
    ],
  };
};
