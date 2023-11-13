module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './src/theme/tamagui.config.ts',
        importsWhitelist: ['constants.js', 'colors.js'],
        logTimings: true,
        disableExtraction: process.env.NODE_ENV === 'development',
        themeBuilder: {
          input: './src/theme/themes-new.ts',
          output: './src/theme/themes.tsx'
        }
      }
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
}
