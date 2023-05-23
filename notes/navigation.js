import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import AllNotes from './screens/AllNotes'
import Note from './screens/Note'
import Archived from './screens/Archived'
import Login from './screens/Login'
import SingUp from './screens/SingUp'
import { useContext } from 'react'
import { DataContext } from './context/auth'

const Stack = createNativeStackNavigator()

function Routes() {
     
    const { auth } = useContext(DataContext)

    return (
        <Stack.Navigator
            initialRouteName={ !auth ? 'Login' : 'Home' }
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                !auth 
                    ? (
                        <Stack.Group>
                            <Stack.Screen name='Login' component={Login} />
                            <Stack.Screen name='SingUp' component={SingUp} />
                        </Stack.Group>
                    )
                    : (
                        <Stack.Group>
                            <Stack.Screen name='Home' component={Home} />
                            <Stack.Screen name='Notes' component={AllNotes} />
                            <Stack.Screen name='Note' component={Note} />
                            <Stack.Screen name='Archived' component={Archived} />
                        </Stack.Group>
                    )
            }
        </Stack.Navigator>
    )

}

export default Routes