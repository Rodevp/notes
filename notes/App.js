import { NavigationContainer } from '@react-navigation/native'
import Routes from './navigation'
import { StatusBar } from 'react-native'
import 'react-native-url-polyfill/auto'
import { ContextProvider } from './context/auth';

export default function App() {
  return (
    <>
      <StatusBar translucent />
      <ContextProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ContextProvider>
    </>
  );
}
