import React from 'react'
import axios from 'axios'
import { useHistory} from 'react-router-dom';

export default function NewGroup({setCurrentGroup}) {
    // const history = useHistory();
    function handleSubmit (e) {
        e.preventDefault();
        
        axios.post('http://localhost:4000/groups/new', {
            name: e.target[0].value,
            teacher_id: 1
        })
        // setCurrentGroup(1)
        // history.push('/main')

    }
    return (
        <div className='newGroup'>
            <h3>New Group From:</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <input required name='name' type='text' placeholder='Name' />
                    <button type='submit'>Create</button>
                </form>
            </div>
            
        </div>
    )
}
