import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DataContext } from '../context/auth'
import { ContextUser } from '../context/user'
import theme from '../theme'

import { supabase } from '../lib/supabase'

function Login() {

    const [email, setEmail] = useState('Email')
    const [password, setPassword] = useState('Contraseña')

    const route = useNavigation()

    const { setAuth } = useContext(DataContext)
    const { setUserData } = useContext(ContextUser)

    const authUser = async () => {
        try {

            const { data, error } = await supabase?.auth?.signInWithPassword({
                email,
                password
            })

            if (error) {
                return Alert.alert('Error', 'Usuario o Contraseña incorrecto')
            }

            setUserData(state => {
                return {
                    ...state,
                    user: {
                        token: data?.session?.access_token,
                        id: data?.user?.id,
                        email: data?.user?.email
                    }
                }
            })

            setAuth(true)

            return route.navigate("Home")

        } catch (err) {
            console.log('error server', err?.message)
        }
    }


    return (
        <SafeAreaView
            style={styles.container}
        >
            <View
                style={styles.cardLogin}
            >
                <Text style={styles.text}>Login</Text>
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
                        authUser()
                    }}
                    style={styles.btn}
                >
                    <Text style={styles.textBtn} >Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => route.navigate("SingUp")}
                >
                    <Text>Registrarce</Text>
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

export default Login