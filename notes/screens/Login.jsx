import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DataContext } from '../context/auth'

function Login() {

    const route = useNavigation()

    const { setAuth } = useContext(DataContext)

  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => {
            setAuth(true)
            route.navigate("Home")
        }}
      >
        <Text style={{fontSize: 30}} >Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => route.navigate("SingUp")}
      >
        <Text>SingUp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login