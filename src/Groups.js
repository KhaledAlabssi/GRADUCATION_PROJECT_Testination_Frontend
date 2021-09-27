import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Groups({groups}) {
    const [group, setGroup] = useState('')
    async function handleEdit (e) {
        console.log(e.target.value)
        const v = await axios.get(`http://localhost:4000/groups/${e.target.value}`)
        await setGroup(v.data[0])
        
    }
    return (
        <div className='groups'>
            <Link to='/newGroup'><button>Create new group</button></Link>
            {groups.map(i => {
                // console.log(i)
                return (
                <>
                    <h3>{i.name}</h3>
                    <button onClick={handleEdit} value={i.name}>Edit</button>
                    <button>Assign Test</button>
                    <hr />
                </>
                )
                
            })}

            
        </div>
    )
}
