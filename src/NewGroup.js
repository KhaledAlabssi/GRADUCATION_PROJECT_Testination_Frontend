import React from 'react'
import axios from 'axios';

export default function NewGroup() {
    function handleSubmit (e) {
        e.preventDefault();
        axios.post('http://localhost:4000/groups/new', {
            name: "Khaled 2 Hard Coded name",
            teacher_id: 1
        })
        
        

    }
    return (
        <div>
            <h3>New Group From:</h3>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input required name='name' type='text' placeholder='Name' />
                    <input name='teacher_id' type='number' placeholder='user_id' />
                    <button type='submit'>Create</button>
                </form>
            </div>
            
        </div>
    )
}
