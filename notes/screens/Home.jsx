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
            <View
                style={styles.option}
            >
                <Text style={styles.titleOptions}>Opciones</Text>
            </View>
            <View
                style={styles.contentItems}
            >
                <View
                    style={styles.item}
                >
                    <View style={styles.itemInfo}>
                        <MaterialIcons name="insert-drive-file" size={24} color={theme.orange} />
                        <Text style={[styles.itemText, styles.optionTitle]}>Todas</Text>
                    </View>
                    <Text style={[styles.itemText, styles.quantityItem]}>188</Text>
                </View>
                <View
                    style={styles.item}
                >
                    <View style={styles.itemInfo}>
                        <MaterialIcons name="archive" size={24} color={theme.green} />
                        <Text style={[styles.itemText, styles.optionTitle]}>Archivadas</Text>
                    </View>
                    <Text style={[styles.itemText, styles.quantityItem]}>38</Text>
                </View>
                <View
                    style={styles.item}
                >
                    <View style={styles.itemInfo}>
                        <MaterialIcons name="insert-drive-file" size={24} color={theme.red} />
                        <Text style={[styles.itemText, styles.optionTitle]}>Eliminadas</Text>
                    </View>
                    <Text style={[styles.itemText, styles.quantityItem]}>188</Text>
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
        height: 180,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 50,
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
    },
    option: {
        width: "90%",
        justifyContent: "center",
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        backgroundColor: theme.black
    },
    titleOptions: {
        fontSize: 15,
        color: theme.white
    },
    contentItems: {
        width: "90%"
    },
    item: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 6,
        paddingHorizontal: 8
    },
    itemInfo: {
        flexDirection: "row"
    },
    itemText: {
        color: theme.white
    },
    optionTitle: {
        paddingHorizontal: 10
    }
})

export default Home