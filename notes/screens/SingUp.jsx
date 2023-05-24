import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../theme'

function SingUp() {

  const [email, setEmail] = useState('Email')
  const [password, setPassword] = useState('Contraseña')

  const route = useNavigation()

  return (
      <SafeAreaView
          style={styles.container}
      >
          <View
              style={styles.cardLogin}
          >
              <Text style={styles.text}>Registrarce</Text>
              <View
                  style={styles.contentInput}
              >
                  <TextInput
                      style={styles.input}
                      placeholder='Email'
                      onChangeText={(mail) => setEmail(mail)}
                  />
                  <TextInput
                      style={styles.input}
                      placeholder='Contraseña'
                      secureTextEntry={true}
                      onChangeText={(pass) => setPassword(pass)}
                  />
              </View>
              <TouchableOpacity
                  onPress={() => {
                  }}
                  style={styles.btn}
              >
                  <Text style={styles.textBtn} >Registrarce</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => route.navigate("Login")}
              >
                  <Text>Ir a Login</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.primary
  },
  cardLogin: {
      width: "90%",
      height: "50%",
      paddingTop: 10,
      borderRadius: 16,
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.blue
  },
  text: {
      fontSize: 35
  },
  contentInput: {
      width: "90%"
  },
  input: {
      width: "100%",
      height: 45,
      marginBottom: 20,
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 10,
      borderColor: theme.primary
  },
  btn: {
      width: "60%",
      height: 40,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.green
  },
  textBtn: {
      width: "50%",
      height: "100%",
      fontSize: 20,
      paddingVertical: 5,
      textAlign: "center",
      color: theme.white
  }
})

export default SingUp