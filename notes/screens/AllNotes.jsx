import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../theme'
import ItemNote from '../components/ItemNote'
import Back from '../components/Back'
import { useNavigation } from '@react-navigation/native'

function AllNotes() {

  const route = useNavigation()

  const back = () => route.goBack()

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Back navigate={back} /> 
      <ItemNote />
      <ItemNote />
      <ItemNote />
      <ItemNote />
      <ItemNote />
      <ItemNote />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary
  }
})

export default AllNotes