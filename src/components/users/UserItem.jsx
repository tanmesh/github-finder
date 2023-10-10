import PropType from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'

function UserItem({ user: { id, login, avatar_url } }) {
    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className='flex-row items-center space-x-4 card-body'>
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt='Profile'></img>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link to={`/user/${login}`} className='text-base-content text-opacity-40'>Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}

UserItem.prototype = {
    item: PropType.object.isRequired,
}

export default UserItem
