import { createContext, useReducer } from "react";
import React from 'react'
import userReducer from "./UserReducer";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        isLoading: false,
        repos: [],
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    return <UserContext.Provider
        value={{
            ...state,
            dispatch,
        }}>
        {children}
    </UserContext.Provider>
}

export default UserContext
