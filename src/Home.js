import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home-page'>
            <div className='home'>
            
            <Link to='/studentLogin'><button>Login as Student</button></Link>
            <Link to='/teacherLogin'><button>Login as Teacher</button></Link>
            </div>
            <img src='https://ik.imagekit.io/kaa/testination/home-page_Df9JSgTbk.jpeg?updatedAt=1633504320427' />
            
            
        </div>
    )
}
