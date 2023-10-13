import { SafeAreaView } from 'react-native'
// import { Calendar } from 'react-native-calendars'
import {
  Button,
  Card,
  Checkbox,
  ListItem,
  Separator,
  Switch,
  TamaguiProvider,
  Text,
  Theme,
  YGroup,
  YStack
} from 'tamagui'

import { DialogDemo } from '@/DialogDemo'
import config from '@/theme/tamagui.config'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light_blue">
        <NavigationContainer>
          <SafeAreaView>
            {/* <Calendar /> */}
            <YStack space alignItems="center">
              <Card bordered pressTheme alignSelf="center" height={200} width="90%" size="$4" justifyContent="center">
                <Button themeInverse theme="alt1" alignSelf="center">
                  <Text>Hello World!</Text>
                </Button>
              </Card>
              <Separator alignSelf="stretch" marginVertical={15} />
              <DialogDemo />
              <Separator alignSelf="stretch" marginVertical={15} />
              <Checkbox size="$4" disabled />
              <Separator alignSelf="stretch" marginVertical={15} />
              <Switch alignSelf="center" marginBottom="$4">
                <Switch.Thumb animation="medium" />
              </Switch>
              <Separator alignSelf="stretch" marginVertical={15} />
              <YGroup alignSelf="center" bordered width="90%" size="$4">
                <YGroup.Item>
                  <ListItem pressTheme title="Star" subTitle="Twinkles" />
                </YGroup.Item>
                <YGroup.Item>
                  <ListItem pressTheme>
                    <Text>Moon</Text>
                  </ListItem>
                </YGroup.Item>
                <YGroup.Item>
                  <ListItem pressTheme>
                    <Text>Sun</Text>
                  </ListItem>
                </YGroup.Item>
                <YGroup.Item>
                  <ListItem pressTheme>
                    <Text>Cloud</Text>
                  </ListItem>
                </YGroup.Item>
              </YGroup>
            </YStack>
          </SafeAreaView>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  )
}

export default App
