import { Link } from 'react-router-dom'
import React from 'react'

function About() {
  return (
    <div className="mb-2 rounded-md card">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold text-black">
          About This Project
        </h3>

        <p>This is a React app to find Github user profiles.</p>
        <p className="mb-3 text-black">Version: 1.0.0</p>
        <p><Link to="/" className='btn btn-black btn-sm'>Back to Home</Link></p>
      </div>
    </div>
  )
}
export default About