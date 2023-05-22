import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import AllNotes from './screens/AllNotes'
import Note from './screens/Note'

const Stack = createNativeStackNavigator()

function Routes() {

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen  name='Home'  component={Home}    />
            <Stack.Screen  name='Notes' component={AllNotes}    />
            <Stack.Screen  name='Note'  component={Note}    />
        </Stack.Navigator>
    )

}

export default Routes