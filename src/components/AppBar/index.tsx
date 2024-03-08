import { Stack, styled, withStaticProperties } from 'tamagui'
import { View } from 'tamagui'

export const AppBarSection = styled(Stack, {
  display: 'flex',
  paddingVertical: 8,
  justifyContent: 'center',
  gap: 5,
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 0,
  alignSelf: 'stretch',
  variants: {
    type: {
      left: { alignItems: 'flex-start' },
      right: {
        alignItems: 'flex-end',
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

export const AppBar = withStaticProperties(AppBarFrame, {
  Section: AppBarSection,
  Center: View
})
// export const AppBar = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <View
//       display="flex"
//       flexDirection="row"
//       height={48}
//       paddingHorizontal={20}
//       alignItems="center"
//       alignSelf="stretch"
//       flexShrink={0}
//     >
//       {children}
//     </View>
//   )
// }
