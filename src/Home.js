import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home'>
            <h1>Home page</h1>
            <button>Login as Student</button>
            <button>Login as Teacher</button>
            <Link to='/main'><button>Main Page</button></Link>
        </div>
    )
}
