import { Stack, styled, withStaticProperties } from 'tamagui'
import { View } from 'tamagui'

export const AppBarSection = styled(Stack, {
  display: 'flex',
  paddingVertical: 8,
  justifyContent: 'center',
  gap: 5,
  flexGrow: 1,
  flexBasis: 0,
  alignSelf: 'stretch',
  variants: {
    type: {
      left: { alignItems: 'flex-start' },
      right: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10
      }
    }
  } as const
})

export const AppBarFrame = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  height: 48,
  paddingHorizontal: 20,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  flexShrink: 0
})

export const IconWrapper = styled(View, {
  display: 'flex',
  width: 44,
  height: 44,
  justifyContent: 'center',
  gap: 10,
  variants: {
    type: {
      left: { alignItems: 'flex-start' },
      right: { alignItems: 'flex-end' }
    }
  } as const
})

export const AppBarCenter = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})
export const AppBar = withStaticProperties(AppBarFrame, {
  Section: AppBarSection,
  Center: AppBarCenter,
  IconWrapper: IconWrapper
})
