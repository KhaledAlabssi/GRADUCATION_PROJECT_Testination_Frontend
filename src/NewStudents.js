import axios from 'axios';
import React from 'react'

export default function NewStudents() {
    
    function handleSubmit (e) {
        e.preventDefault();
        axios.post('http://localhost:4000/students/new', {
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            username: e.target[1].value + e.target[0].value,
            email: e.target[2].value,
            teacher_id: 1,
            password: 123

        })
    }
    return (
        <div className='newStudent'>
            <h3>Name of Group</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
                <input type='email' placeholder='Email' />
                <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}
