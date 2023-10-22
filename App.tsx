import { SafeAreaView } from 'react-native'
// import { Calendar } from 'react-native-calendars'
import {
  Checkbox,
  ListItem,
  Separator,
  SizableText,
  Switch,
  TamaguiProvider,
  Text,
  Theme,
  YGroup,
  YStack
} from 'tamagui'

import { DialogDemo } from '@/DialogDemo'
import { BigButton, LongButton, SmallButton } from '@/components/Button'
import { customPalettes } from '@/theme/customPalettes'
import config from '@/theme/tamagui.config'
import { NavigationContainer } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'

const App = () => {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <SafeAreaView style={{ backgroundColor: customPalettes.g[2], flex: 1 }}>
          {/* <Calendar /> */}
          <YStack space alignItems="center">
            <LongButton alignSelf="center" marginBottom={20}>
              테스트
            </LongButton>
            <BigButton alignSelf="center" rounded marginBottom={20}>
              테스트
            </BigButton>
            <SmallButton alignSelf="center" rounded>
              테스트
            </SmallButton>
            <Separator alignSelf="stretch" marginVertical={15} />
            <Separator alignSelf="stretch" marginVertical={15} />
            <Checkbox size="$4">
              <Checkbox.Indicator>
                <Icon name="check" size={15} color="black" />
              </Checkbox.Indicator>
            </Checkbox>
            <Separator alignSelf="stretch" marginVertical={15} />
            <Switch alignSelf="center" marginBottom="$4">
              <Switch.Thumb animation="medium" />
            </Switch>
          </YStack>
        </SafeAreaView>
      </NavigationContainer>
    </TamaguiProvider>
  )
}

export default App
