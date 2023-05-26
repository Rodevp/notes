import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet, View, TouchableOpacity, Modal, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'
import { useNavigation } from '@react-navigation/native'
import { ContextUser } from '../context/user'
import { DataContext } from '../context/auth'
import { useContext, useState } from 'react'

function Home() {

    const route = useNavigation()

    const toAllNotes = () => route.navigate("Notes")
    const toArchiveds = () => route.navigate("Archived")
    const [modalVisible, setModalVisible] = useState(false)

    const { userData } = useContext(ContextUser)
    const { setAuth } = useContext(DataContext)

    console.log('user data -> ', userData)

    return (
        <SafeAreaView
            style={styles.home}
        >
            <View
                style={styles.cardHome}
            >
                <View>
                    <Text style={styles.title} >BIENVENIDO</Text>
                    <Text style={styles.userName} >{userData?.user?.email}</Text>
                    <Text style={styles.date} >22/22/2022</Text>
                </View>
                <View
                    style={styles.cardLogout}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setAuth(false)
                        }}
                    >
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
                        <Text style={[styles.itemText, styles.quantityItem]}>{userData?.task?.length}</Text>
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
                        <Text style={[styles.itemText, styles.quantityItem]}>{userData?.archived?.length}</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={styles.item}
                >
                    <View style={styles.itemInfo}>
                        <MaterialIcons name="insert-drive-file" size={24} color={theme.red} />
                        <Text style={[styles.itemText, styles.optionTitle]}>Eliminadas</Text>
                    </View>
                    <Text style={[styles.itemText, styles.quantityItem]}>{userData?.delete?.length}</Text>
                </View>
            </View>
            <View
                style={styles.contentAddNote}
            >
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <View
                        style={styles.btnAdd}
                    >
                        <MaterialIcons name="add" size={34} color={theme.white} />
                    </View>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View
                    style={styles.modalItem}
                >
                    <View
                        style={styles.modalForm}
                    >
                        <Text style={styles.titleModal}>Agregar Nota</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Titulo'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Description'
                        />
                        <TouchableOpacity
                            style={styles.btn}
                        >
                            <Text style={styles.titleModal}>
                                Agregar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    },
    modalItem: {
        width: "100%",
        height: "90%",
        marginTop: "10%",
        alignItems: "center",
        justifyContent: "center"
    },
    modalForm: {
        width: "90%",
        height: "40%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: theme.orange
    },
    input: {
        width: "80%",
        height: "20%",
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.primary
    },
    btn: {
        width: "60%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: theme.primary
    },
    titleModal: {
        fontSize: 20,
        color: theme.white
    }
})

export default Home