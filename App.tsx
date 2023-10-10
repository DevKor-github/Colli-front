import { SafeAreaView } from 'react-native'
import { Calendar } from 'react-native-calendars'

import { Dummy } from '@/Dummy'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Calendar />
        <Dummy text="Hello World!!!" />
        <Dummy text="Hello World!" />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
