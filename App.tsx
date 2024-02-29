import { Provider } from 'jotai'
import { TamaguiProvider } from 'tamagui'

import { Router } from '@/router'
import config from '@/theme/tamagui.config'

const App = () => {
  return (
    <Provider>
      <TamaguiProvider config={config}>
        <Router />
      </TamaguiProvider>
    </Provider>
  )
}

export default App
