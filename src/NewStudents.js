import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router';

export default function NewStudents({groups}) {
    const [updatedGroups, setUpdatedGroups] = useState(groups)
    const history = useHistory();
    const [currentStudent, setCurrentStudent] = useState(null)
    useEffect(() => {
        axios("http://localhost:4000/students/current")
      .then((response) => {
        setCurrentStudent(response.data[0].id);
        
      })
      .catch((error) => {
        console.error("Error fetching data for currentStudents from NewStudent.js: ", error);
      });

      axios("http://localhost:4000/groups")
      .then((response) => {
        setUpdatedGroups(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data for Groups: ", error);
      });
    }, [setCurrentStudent])
    
    function handleSubmit (e) {
        let pass = Math.round(Math.random() * 100000000)
        
        e.preventDefault();
        axios.post('http://localhost:4000/students/new', {
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            username: e.target[1].value + e.target[0].value,
            email: e.target[2].value,
            teacher_id: 1,
            password: pass,
        })
        setCurrentStudent(prev => prev += 1)
        axios.post('http://localhost:4000/students/toGroup', {
            
            group: e.target[3].value,
            student_id: currentStudent + 1
        })

        axios.post('http://localhost:4000/email', {
            email: e.target[2].value,
            password: pass,
            email: e.target[2].value,
   
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log("all good here...", response.status)
                    // setEmailStatus("Quote Email Sent Successfully to the client !")
                } else {
                    console.log("error", response.status)
                    // setEmailStatus("Quote Email NOT sent, Please contact your Admin Team !")
                }
            })
            .catch(function (error) {
                console.log(error);
                // setEmailStatus("Quote Email NOT sent, Please contact your Admin Team !")
            });

        history.push('/groups')
    }
    return (
        <div className='new-student'>
            <h3>Add New Student</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
                <input type='email' placeholder='Email' />
                <select name='group' id='group'>
                    {updatedGroups.map(i => <option value={i.id}>{i.name}</option>)}           
                </select>       
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}
