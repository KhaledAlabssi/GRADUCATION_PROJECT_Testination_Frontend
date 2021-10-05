import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home'>
            <h1>Home page</h1>
            <Link to='/studentLogin'><button>Login as Student</button></Link>
            <Link to='/teacherLogin'><button>Login as Teacher</button></Link>
            
            
        </div>
    )
}
