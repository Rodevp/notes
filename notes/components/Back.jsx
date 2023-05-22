import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'

function Back({ navigate }) {
    return (
        <View style={styles.back}>
            <TouchableOpacity
                onPress={navigate}
            >
                <MaterialIcons name="arrow-back" size={24} color={theme.white} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        width: "100%",
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 10,
        justifyContent: "center",
    }
})

export default Back
