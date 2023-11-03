import { TamaguiProvider } from 'tamagui'

import { Router } from '@/router'
import config from '@/theme/tamagui.config'

const App = () => {
  return (
    <TamaguiProvider config={config}>
      <Router />
    </TamaguiProvider>
  )
}

export default App
