import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function NewQuestion({tests}) {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    useEffect(() => {
        axios('http://localhost:4000/students/current')
        .then(response => {
            setCurrentQuestion(response.data[0].id)
            console.log(response.data)
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

        axios.post('http://localhost:4000/questions/addAnswer', {
            correct: e.target[3].value,
            option1: e.target[4].value,
            option2: e.target[5].value,
            option3: e.target[6].value,
            question_id: currentQuestion + 1,
            score: e.target[1].value
            

        })
    }
    return (
        <div className='newQuestion'>
            <h3>Name of Test</h3>
            <form onSubmit={handleSubmit}>
                <h5>Question:</h5>
                <input type='text' placeholder='Question' />
                <br />
                <input placeholder='1' type='number' min='1' max='10' step='1' />
                <br />
                <select name='test' id='test'>
                    {tests.map(i => <option value={i.id}>{i.name}</option>)}
                </select>
                <br />
                <h5>Answer:</h5>
                <input type='text' placeholder='Correct Answer' />
                <input type='text' placeholder='Option 1' />
                <input type='text' placeholder='Option 2' />
                <input type='text' placeholder='Option 3' /> 
                <br />


                <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}
