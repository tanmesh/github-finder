import { createContext, useReducer } from "react";
import React from 'react'
import userReducer from "./UserReducer";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const initialState = {
        users: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    // // Only for testing 
    // const fetchUsers = async () => {
    //     setLoading()

    //     const response = await fetch("https://api.github.com/users");
    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_USER',
    //         payload: data
    //     })
    // }

    const searchUsers = async (user) => {
        setLoading()

        console.log("user ", user)
        const params = new URLSearchParams({
            q: user
        })

        const response = await fetch(`https://api.github.com/search/users?${params}`);
        const { items } = await response.json()

        dispatch({
            type: 'GET_USER',
            payload: items
        })
    }

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    return <UserContext.Provider
        value={{
            users: state.users,
            searchUsers,
            clearUsers,
            isLoading: state.isLoading,
        }}>
        {children}
    </UserContext.Provider>
}

export default UserContext
