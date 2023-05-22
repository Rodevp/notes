import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'
import { useNavigation } from '@react-navigation/native'

function Home() {

    const route = useNavigation()

    const toAllNotes = () => route.navigate("Notes")
    const toArchiveds = () => route.navigate("Archived")

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
                    <TouchableOpacity>
                        <MaterialIcons name='logout' size={34} color={theme.white} />
                    </TouchableOpacity>
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
                <TouchableOpacity
                    onPress={toAllNotes}
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
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={toArchiveds}
                >
                    <View
                        style={styles.item}
                    >
                        <View style={styles.itemInfo}>
                            <MaterialIcons name="archive" size={24} color={theme.green} />
                            <Text style={[styles.itemText, styles.optionTitle]}>Archivadas</Text>
                        </View>
                        <Text style={[styles.itemText, styles.quantityItem]}>38</Text>
                    </View>
                </TouchableOpacity>
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
            <View
                style={styles.contentAddNote}
            >
                <TouchableOpacity>
                    <View
                        style={styles.btnAdd}
                    >
                        <MaterialIcons name="add" size={34} color={theme.white} />
                    </View>
                </TouchableOpacity>
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
    },
    contentAddNote: {
        width: "90%",
        height: 80,
        bottom: "3%",
        position: "absolute",
        alignItems: "center"
    },
    btnAdd: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.black
    }
})

export default Home