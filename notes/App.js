import { NavigationContainer } from '@react-navigation/native'
import Routes from './navigation'
import { StatusBar } from 'react-native'
import { ContextProvider } from './context/auth'
import { ContextUserProvider } from './context/user'


export default function App() {
  return (
    <>
      <StatusBar translucent />
      <ContextProvider>
        <NavigationContainer>
          <ContextUserProvider>
            <Routes />
          </ContextUserProvider>
        </NavigationContainer>
      </ContextProvider>
    </>
  );
}
