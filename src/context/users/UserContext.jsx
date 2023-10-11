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

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        })
    }

    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`https://api.github.com/users/${login}`);

        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`);

        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`
        //     , {
        //         headers: {
        //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //         }
        //     });

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const user = await response.json()
            dispatch({
                type: 'GET_USER',
                payload: user,
            })
        }
    }

    const searchUsers = async (user) => {
        setLoading()

        const params = new URLSearchParams({
            q: user
        })

        const response = await fetch(`https://api.github.com/search/users?${params}`);

        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`);

        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`
        //     , {
        //         headers: {
        //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //         }
        //     });
        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const getRepos = async (login) => {
        setLoading()

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`);

        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`);

        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`
        //     , {
        //         headers: {
        //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //         }
        //     });

        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()
            dispatch({
                type: 'GET_REPOS',
                payload: data,
            })
        }
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
            user: state.user,
            getUser,
            getRepos,
            repos: state.repos,
        }}>
        {children}
    </UserContext.Provider>
}

export default UserContext
