// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Onboarding } from '@e-wallet/onboarding';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


export function App() {
  return (
    <div>
       <ChakraProvider theme={theme}>
          <Onboarding  />
       </ChakraProvider>
    </div>
  );
}

export default App;
