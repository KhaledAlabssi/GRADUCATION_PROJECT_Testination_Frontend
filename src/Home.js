import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home'>
            
            <Link to='/studentLogin'><button>Login as Student</button></Link>
            <Link to='/teacherLogin'><button>Login as Teacher</button></Link>
            
            
        </div>
    )
}
