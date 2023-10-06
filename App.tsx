import { SafeAreaView } from 'react-native';

import { Dummy } from '@/Dummy';

const App = () => {
  return (
    <SafeAreaView>
      <Dummy text="Hello World!" />
      <Dummy text="Hello World!" />
    </SafeAreaView>
  );
};

export default App;
