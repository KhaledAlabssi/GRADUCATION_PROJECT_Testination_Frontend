import React from 'react'
import { Link } from 'react-router-dom'


export default function Main() {
    return (
        <>
        <div className='main'>
            <Link to='/tests'><button>Tests</button></Link>
            <Link to='/groups'><button>Groups</button></Link>
            <Link to='/results'><button>Results</button></Link>
            
        </div>
        <img className='main-img' src='https://ik.imagekit.io/kaa/testination/main_final_gpvqdKkMC.jpeg?updatedAt=1633445940701' />

        </>
    )
}
