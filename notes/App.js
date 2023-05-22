import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './navigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
