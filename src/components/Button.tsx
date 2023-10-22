import { Button, type GetProps, styled } from 'tamagui'

import { customPalettes } from '@/theme/customPalettes'

// or '@tamagui/core'
/* 
 info: style: round | square
 info: size: small | big | long
 info: backgroundColor: g[1] | g[8]
 info: color: g[0]
 */

export const LongButton = styled(Button, {
  name: 'LongButton',
  width: '$long',
  fontFamily: '$regular17',
  backgroundColor: customPalettes.g[8],
  color: customPalettes.g[0],
  pressStyle: {
    backgroundColor: customPalettes.g[7]
  },
  variants: {
    rounded: {
      true: {
        borderRadius: '$round'
      },
      false: {
        borderRadius: '$square'
      }
    }
  } as const
})

export type LongButton = GetProps<typeof LongButton>

export const BigButton = styled(Button, {
  name: 'BigButton',
  width: '$big',
  height: 52,
  fontFamily: '$regular14',
  backgroundColor: customPalettes.g[1],
  variants: {
    rounded: {
      true: {
        borderRadius: '$round'
      },
      false: {
        borderRadius: '$square'
      }
    }
  } as const
})

export type BigButton = GetProps<typeof BigButton>

export const SmallButton = styled(Button, {
  name: 'SmallButton',
  width: '$small',
  height: 42,
  fontFamily: '$regular14',
  backgroundColor: customPalettes.g[1],
  variants: {
    rounded: {
      true: {
        borderRadius: '$round'
      },
      false: {
        borderRadius: '$square'
      }
    }
  } as const
})

export type SmallButton = GetProps<typeof SmallButton>
