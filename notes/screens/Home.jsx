import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'

function Home() {
    return (
        <SafeAreaView
            style={styles.home}
        >
            <View
                style={styles.cardHome}
            >
                <View>
                    <Text style={styles.title} >BIENVENIDO</Text>
                    <Text style={styles.userName} >@Eduardito</Text>
                    <Text style={styles.date} >22/22/2022</Text>
                </View>
                <View
                    style={styles.cardLogout}
                >
                    <MaterialIcons name='logout' size={34} color={theme.white} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        paddingTop: 20,
        alignItems: "center",
        backgroundColor: theme.primary
    },
    cardHome: {
        width: "90%",
        borderRadius: 16,
        height: 180,
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        backgroundColor: theme.yellow
    },
    cardLogout: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },  
    title: {
        fontSize: 35,
        color: theme.white
    },
    userName: {
        fontSize: 28,
        color: theme.white
    },
    date: {
        fontSize: 18,
        color: theme.white
    }
})

export default Home