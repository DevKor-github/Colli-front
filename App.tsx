import { RecoilRoot } from 'recoil'
import { TamaguiProvider } from 'tamagui'

import { Router } from '@/router'
import config from '@/theme/tamagui.config'

const App = () => {
  return (
    <RecoilRoot>
      <TamaguiProvider config={config}>
        <Router />
      </TamaguiProvider>
    </RecoilRoot>
  )
}

export default App
