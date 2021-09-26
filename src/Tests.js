import React from 'react'
import { Link } from 'react-router-dom'

export default function Test({tests}) {
    return (
        <div className='tests'>
            <Link to='/newTest'><button>Create new Test</button></Link>
            {tests.map(i => {
                console.log(i)
                return (
                <>
                    <h3>{i.name}</h3>
                    <hr />
                </>
                )
                
            })}

            
        </div>
    )
}
