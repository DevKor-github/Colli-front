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
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@theme': './src/theme',
          '@types': './src/types'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
}
