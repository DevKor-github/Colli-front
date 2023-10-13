import { SafeAreaView } from 'react-native'
// import { Calendar } from 'react-native-calendars'
import { Button, Card, Checkbox, ListItem, Separator, Switch, TamaguiProvider, Theme, YGroup, YStack } from 'tamagui'

import { DialogDemo } from '@/DialogDemo'
import config from '@/theme/tamagui.config'
import { NavigationContainer } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'

const Star = <Icon name="star" size={15} color="black" />
const Moon = <Icon name="moon" size={15} color="black" />
const Sun = <Icon name="sun" size={15} color="black" />
const Cloud = <Icon name="cloud" size={15} color="black" />

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
                  Hello World!
                </Button>
              </Card>
              <Separator alignSelf="stretch" marginVertical={15} />
              <DialogDemo />
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
              <Separator alignSelf="stretch" marginVertical={15} />
              <YGroup alignSelf="center" bordered width="90%" size="$4">
                <YGroup.Item>
                  <ListItem pressTheme title="Star" icon={Star} subTitle="Twinkles" />
                </YGroup.Item>
                <YGroup.Item>
                  <ListItem pressTheme icon={Moon}>
                    Moon
                  </ListItem>
                </YGroup.Item>
                <YGroup.Item>
                  <ListItem pressTheme icon={Sun}>
                    Sun
                  </ListItem>
                </YGroup.Item>
                <YGroup.Item>
                  <ListItem pressTheme icon={Cloud}>
                    Cloud
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
