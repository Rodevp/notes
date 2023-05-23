import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import AllNotes from './screens/AllNotes'
import Note from './screens/Note'
import Archived from './screens/Archived'

const Stack = createNativeStackNavigator()

function Routes() {

    return (
        <Stack.Navigator
            initialRouteName='Note'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen  name='Home'  component={Home}    />
            <Stack.Screen  name='Notes' component={AllNotes}    />
            <Stack.Screen  name='Note'  component={Note}  />
            <Stack.Screen name='Archived' component={Archived} />
        </Stack.Navigator>
    )

}

export default Routes