import { createContext, useState } from 'react'

export const ContextUser = createContext()

export const ContextUserProvider = (props) => {

    const [userData, setUserData] = useState({
        user: {},
        task: [],
        archived: [],
        delete: []
    })

    const dataContext = {
        userData,
        setUserData
    }

    return (
        <ContextUser.Provider value={dataContext} >
            {props.children}
        </ContextUser.Provider>
    )

}