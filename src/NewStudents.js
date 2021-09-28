import axios from 'axios';
import React, {useEffect, useState} from 'react'

export default function NewStudents({groups}) {
    const [currentStudent, setCurrentStudent] = useState(null)
    useEffect(() => {
        axios("http://localhost:4000/students/current")
      .then((response) => {
        setCurrentStudent(response.data[0].id);
        
      })
      .catch((error) => {
        console.error("Error fetching data for currentStudents from NewStudent.js: ", error);
      });
    }, [setCurrentStudent])
    
    function handleSubmit (e) {
        
        
        e.preventDefault();
        axios.post('http://localhost:4000/students/new', {
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            username: e.target[1].value + e.target[0].value,
            email: e.target[2].value,
            teacher_id: 1,
            password: 123,
            group: e.target[3].value,
            student_id: currentStudent + 1
            
            
            

        })
        setCurrentStudent(prev => prev += 1)
        

        axios.post('http://localhost:4000/students/toGroup', {
            
            group: e.target[3].value,
            student_id: currentStudent
            
            

        })

        
        
    }
    return (
        <div className='newStudent'>
            <h3>Add New Student</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
                <input type='email' placeholder='Email' />
                <label for='group'>Choos a group:</label>
                <select name='group' id='group'>
                    {groups.map(i => <option value={i.id}>{i.name}</option>)}


                </select>
                <button type='submit'>Add</button>
            </form>
            
            
        </div>
    )
}
