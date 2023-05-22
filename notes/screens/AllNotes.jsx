import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../theme'
import ItemNote from '../components/ItemNote'

function AllNotes() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View>
        <MaterialIcons name="arrow-back" size={24} color={theme.white} />
      </View>
      <ItemNote />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary
  },
})

export default AllNotes