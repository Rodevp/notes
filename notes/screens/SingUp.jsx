import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

function SingUp() {

    const route = useNavigation()

  return (
    <View>
      <Text>SingUp</Text>
      <TouchableOpacity
        onPress={() => route.navigate("Login")}
      >
        <Text style={{fontSize: 40}} >Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SingUp