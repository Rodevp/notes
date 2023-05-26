import { useState, useContext } from 'react'
import { supabase } from '../lib/supabase'
import { Alert } from 'react-native'
import { ContextUser } from '../context/user'
import { useGetAllTaskByUser } from './useGetAllTask'


export function useAddTask(idUser) {
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const { setUserData } = useContext(ContextUser)

    const add = async () => {
        try {

            const {data, error} = await supabase
            
            .from('task')
            .insert({
                user_id: idUser,
                name,
                description
            })

            if (error) {
                console.log('error al agregar')
                Alert.alert('Error', 'Error al agregar tarea')
            }

            console.log('data')

            const allTaskByUser = await useGetAllTaskByUser(idUser)
            
            console.log('alltask in add -> ', allTaskByUser)

            setUserData(state => {
                return {
                    ...state,
                    task: [...allTaskByUser]
                }
            })

        } catch (error) {
            console.log('error en supabase')
        }
    }

    return {
        setName,
        setDescription,
        add
    }


}