import { NavigationContainer } from '@react-navigation/native'
import Routes from './navigation'
import { StatusBar } from 'react-native'
import { ContextProvider } from './context/auth'
import { ContextUserProvider } from './context/user'


export default function App() {
  return (
    <>
      <StatusBar translucent />
      <NavigationContainer>
        <ContextProvider>
          <ContextUserProvider>
            <Routes />
          </ContextUserProvider>
        </ContextProvider>
      </NavigationContainer>
    </>
  );
}
