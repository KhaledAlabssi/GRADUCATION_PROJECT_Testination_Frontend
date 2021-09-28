import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function NewQuestion({tests}) {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    useEffect(() => {
        axios('http://localhost:4000/students/current')
        .then(response => {
            setCurrentQuestion(response.data[0].id)
        })
        .catch(error => {
            console.error('Error fetching data fro currentQuestion from NewQuestion', error)
        })
    }, [setCurrentQuestion])

    function handleSubmit (e) {
        e.preventDefault();
        axios.post('http://localhost:4000/questions/new', {
            body: e.target[0].value,
            teacher_id: 1,
            score: e.target[1].value
        })
        setCurrentQuestion(prev => prev += 1)

        axios.post('http://localhost:4000/questions/toTest', {
            test_id: e.target[2].value,
            question_id: currentQuestion + 1
        })
    }
    return (
        <div className='newQuestion'>
            <h3>Name of Test</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Question' />
                <input type='number' min='1' max='100' />
                <select name='test' id='test'>
                    {tests.map(i => <option value={i.id}>{i.name}</option>)}
                </select>
                <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}
