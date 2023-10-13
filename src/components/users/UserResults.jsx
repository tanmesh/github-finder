import { useContext, useEffect } from "react";
import React from 'react'
import Spinner from "../shared/Spinner";
import UserContext from "../../context/users/UserContext";
import UserItem from "./UserItem";
import { searchUsers } from "../../context/users/UserActions";

function UserResults() {
  const { users, dispatch, isLoading } = useContext(UserContext)

  useEffect(() => {
    const clearData = async () => {
      if (!users || users.length === 0) {
        dispatch({ type: 'SET_LOADING' })
        const users = await searchUsers()
        dispatch({ type: 'GET_USERS', payload: users })
      }
    }
  }, [])

  return isLoading ?
    <Spinner />
    : (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    )
}

export default UserResults
