import React from 'react'
import axios from 'axios'

export default function AssignTest({groups, tests}) {

    function handleSubmit (e) {
        e.preventDefault()
        // console.log(e.target[2].value)
        axios.post('http://localhost:4000/assignments/assignTest', {
            group_id: e.target[0].value,
            test_id: e.target[1].value,
            deadline: e.target[2].value
        })
    }
    return (
        <div className='assignTest'>
            <form onSubmit={handleSubmit}>
                <label for='group'>Choose a group</label>
                <select name='group' id='group'>
                {groups.map(i => <option value={i.id}>{i.name}</option>)}
                </select>
                <label for='test'>Choose a test</label>
                <select name='test' id='test'>
                {tests.map(i => <option value={i.id}>{i.name}</option>)}
                </select>
                <input type='date' />
                {/* <input type='datetime-local' /> */}
                <button type='submit'>Assign Test</button>
            </form>
            

            
        </div>
    )
}
