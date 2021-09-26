import React from 'react'

export default function Groups({groups}) {
    return (
        <div className='groups'>
            <button>Create new group</button>
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
