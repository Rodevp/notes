import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'

function ItemNote() {
    return (
        <View
            style={styles.note}
        >
            <View
                style={styles.noteInfo}
            >
                <View style={styles.avatarNote} ><Text style={[styles.text, styles.textAvatar]}>T</Text></View>
                <View
                    style={styles.contentInfo}
                >
                    <Text style={styles.text}>Titulo Notica</Text>
                    <Text style={styles.text}>22/22/2022</Text>
                </View>
            </View>
            <View>
                <MaterialIcons name="arrow-forward-ios" size={24} color={theme.white} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    note: {
        width: "90%",
        height: 50,
        borderRadius: 6,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: theme.black
    },
    noteInfo: {
        flexDirection: "row"
    },
    text: {
        color: theme.white,
        fontSize: 15
    },
    textAvatar: {
        fontSize: 20
    },
    contentInfo: {
        paddingHorizontal: 10
    },
    avatarNote: {
        width: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }
})

export default ItemNote