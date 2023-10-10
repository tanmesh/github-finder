import { useContext } from "react";
import React from 'react'
import Spinner from "../shared/Spinner";
import UserContext from "../../context/UserContext";
import UserItem from "./UserItem";

function UserResults() {
  const { users, isLoading } = useContext(UserContext)

  console.log(users)

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
