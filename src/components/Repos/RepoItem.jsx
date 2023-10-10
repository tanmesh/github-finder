import { FaLink, FaEye, FaStar, FaUtensils, FaInfo } from 'react-icons/fa'
import React from 'react'
import PropType from 'prop-types'

function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

    return (
        <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
            <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold text-white">
                    <a href={html_url}>
                        <FaLink className='inline mr-1 text-white' /> {name}
                    </a>
                </h3>
                <p className="mb-3 text-white">{description}</p>
                <div>
                    <div className="mr-2 badge bage-info badge-lg">
                        <FaEye className='mr-2'/> {watchers_count}
                    </div>
                    <div className="mr-2 badge bage-success badge-lg">
                        <FaStar className='mr-2'/> {stargazers_count}
                    </div>
                    <div className="mr-2 badge bage-error badge-lg">
                        <FaInfo className='mr-2'/> {open_issues}
                    </div>
                    <div className="mr-2 badge bage-warning badge-lg">
                        <FaUtensils className='mr-2'/> {forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

RepoItem.PropType = {
    repo: PropType.object.isRequired
}

export default RepoItem
