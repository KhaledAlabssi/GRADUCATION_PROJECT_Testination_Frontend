import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function NewTest() {
    const history = useHistory();
    function handleSubmit (e) {
        e.preventDefault();
        axios.post('https://lxam.herokuapp.com/tests/new', {
            name: e.target[0].value,
            teacher_id: 1
        })
        history.push('/main')
    }
    return (
        <div className='new-test'>
            <h3>Create New Test:</h3>
            <div>
                <form onSubmit={handleSubmit} >
                    <input required name='name' type='text' placeholder='Name' />
                    <br />
                    <button type='submit'>Create</button>
                </form>
            </div>

            
        </div>
    )
}
