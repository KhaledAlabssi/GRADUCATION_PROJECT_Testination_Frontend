import React from 'react'
import { Link } from 'react-router-dom'

export default function Groups({groups}) {
    return (
        <div className='groups'>
            <Link to='/newGroup'><button>Create new group</button></Link>
            {groups.map(i => {
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
