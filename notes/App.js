import { NavigationContainer } from '@react-navigation/native'
import Routes from './navigation'
import { StatusBar } from 'react-native'

import 'react-native-url-polyfill/auto'
import { useEffect } from 'react'
import { SUPABASE_URL } from './lib/constant'

export default function App() {

  useEffect(() => {
    console.log('supabase url -> ', SUPABASE_URL)
  }, [])

  return (
    <>
      <StatusBar translucent />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
