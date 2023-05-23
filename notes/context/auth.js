import { createContext, useState } from 'react'

export const DataContext = createContext()

export const ContextProvider = (props) => {

    const [auth, setAuth] = useState(false)

    const dataCtx = {
        auth,
        setAuth
    }

    return (
        <DataContext.Provider value={dataCtx} >
            {props.children}
        </DataContext.Provider>
    )

}