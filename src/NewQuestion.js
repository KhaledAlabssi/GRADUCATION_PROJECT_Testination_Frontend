import React from 'react'
import axios from 'axios'

export default function NewQuestion() {
    function handleSubmit (e) {
        e.preventDefault();
        axios.post('http://localhost:4000/questions/new', {
            body: e.target[0].value,
            teacher_id: 1,
            score: e.target[1].value

        })
    }
    return (
        <div className='newQuestion'>
            <h3>Name of Test</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Question' />
                <input type='number' min='1' max='100' />
                <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}
