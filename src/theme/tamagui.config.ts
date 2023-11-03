import { createAnimations } from '@tamagui/animations-react-native'
import { createFont, createTamagui } from '@tamagui/core'
import { shorthands } from '@tamagui/shorthands'

import { themes } from './themes'
import { tokens } from './tokens-new'

export const animations = createAnimations({
  '100ms': {
    type: 'timing',
    duration: 100
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150
  },
  lazy: {
    damping: 18,
    stiffness: 50
  },
  medium: {
    damping: 15,
    stiffness: 120,
    mass: 1
  },
  slow: {
    damping: 15,
    stiffness: 40
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100
  }
})

const fonts = {
  body: createFont({
    family: `Helvetica`,
    size: {
      2: 12,
      3: 14,
      4: 16,
      5: 18,
      7: 22,
      8: 26,
      9: 32,
      10: 38,
      true: 16
    },
    letterSpacing: {},
    weight: {
      4: '400'
    },
    lineHeight: {
      2: 15,
      3: 17,
      4: 20,
      5: 24,
      7: 29,
      8: 33,
      9: 39,
      10: 46
    }
  }),

  heading: createFont({
    family: `Helvetica`,
    size: {
      2: 16,
      3: 20,
      4: 24,
      5: 28,
      6: 32,
      7: 40,
      8: 48,
      9: 56,
      10: 66
    },
    letterSpacing: {},
    lineHeight: {
      2: 1.5 * 16,
      3: 1.5 * 20,
      4: 1.5 * 24,
      5: 1.5 * 28,
      6: 1.5 * 32,
      7: 1.5 * 40,
      8: 1.5 * 48,
      9: 1.5 * 56,
      10: 1.5 * 66
    },
    transform: {
      5: 'uppercase',
      6: 'none'
    },
    weight: {
      4: '400',
      5: '700'
    }
  }),
  regular12: createFont({
    family: `Pretendard-Regular`,
    size: {
      12: 12,
      true: 12
    },
    letterSpacing: {},
    weight: {
      4: '400'
    },
    lineHeight: {
      12: 17
    }
  }),
  regular14: createFont({
    family: `Pretendard-Regular`,
    size: {
      14: 14,
      true: 14
    },
    letterSpacing: {},
    weight: {
      4: '400'
    },
    lineHeight: {
      14: 20
    }
  }),
  regular17: createFont({
    family: `Pretendard-Regular`,
    size: {
      17: 17,
      true: 17
    },
    letterSpacing: {},
    weight: {
      4: '400'
    },
    lineHeight: {
      17: 21
    }
  }),
  regular18: createFont({
    family: `Pretendard-Regular`,
    size: {
      18: 18,
      true: 18
    },
    letterSpacing: {},
    weight: {
      4: '400'
    },
    lineHeight: {
      18: 44
    }
  }),

  medium: createFont({
    family: `Pretendard-Medium`,
    size: {
      12: 12,
      14: 14,
      17: 17,
      18: 18,
      true: 18
    },
    letterSpacing: {},
    weight: {
      5: '500'
    },
    lineHeight: {
      12: 17,
      14: 20,
      17: 21,
      18: 44
    }
  }),
  bold: createFont({
    family: `Pretendard-Bold`,
    size: {
      12: 12,
      14: 14,
      17: 17,
      18: 18,
      true: 17
    },
    letterSpacing: {},
    weight: {
      5: '700'
    },
    lineHeight: {
      12: 17,
      14: 20,
      17: 21,
      18: 44
    }
  })
}

const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes,
  tokens
})

type AppConfig = typeof config

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so that custom types
  // work everywhere `tamagui` is imported
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
