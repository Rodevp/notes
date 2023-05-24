import { createContext, useState } from 'react'

export const ContextUser = createContext()

export const ContextUserProvider = (props) => {

    const [userData, setUserData] = useState(null)

    const dataCtx = {
        user: {},
        task: []
    }

    return (
        <DataContext.Provider value={dataCtx} >
            {props.children}
        </DataContext.Provider>
    )

}