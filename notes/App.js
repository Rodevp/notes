import { NavigationContainer } from '@react-navigation/native'
import Routes from './navigation'
import { StatusBar } from 'react-native'


export default function App() {
  return (
    <>
      <StatusBar translucent />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
