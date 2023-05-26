import { supabase } from "../lib/supabase";


export async function useGetAllTaskByUser(idUser) {
    try {

        console.log('id in get all task -> ', idUser)

        const { data, error } = await supabase
            .from('task')
            .select('*')
            .eq('user_id', idUser)

        if(error) {
            console.log('error al traer todas las tareas')
        }

        return data


    } catch (error) {
        console.log('error en supabase', error?.message)
    }
}