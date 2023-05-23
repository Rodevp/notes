import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../theme'
import Back from '../components/Back'

function Note() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Back />
      <View
        style={styles.card}
      >
        <Text style={styles.title}>titulo de la notica</Text>
        <Text style={styles.date}>22/22/2022</Text>
      </View>
      <ScrollView
        style={styles.description}
      >
        <Text style={styles.descriptionText}>
          lalalalalalala
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
    backgroundColor: theme.primary
  },
  card: {
    width: "90%",
    height: "12%",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: theme.blue
  },
  title: {
    fontSize: 25
  },
  date: {
    fontSize: 18
  },
  description: {
    width: "90%",
    height: "70%",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: theme.orange
  },
  descriptionText: {
    fontSize: 20
  }
})


export default Note