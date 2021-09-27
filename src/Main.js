import React from 'react'
import { Link } from 'react-router-dom'


export default function Main() {
    return (
        <div className='main'>
            <Link to='/tests'><button>Tests</button></Link>
            <Link to='/groups'><button>Groups</button></Link>
            
        </div>
    )
}
