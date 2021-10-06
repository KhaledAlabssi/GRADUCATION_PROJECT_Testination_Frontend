import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function AssignTest({groups, tests}) {
    const history = useHistory()
    const [updatedGroups, setUpdatedGroups] = useState(groups)
    const [updatedTests, setUpdatedTests] = useState(tests)

    function handleSubmit (e) {
        e.preventDefault()
        // console.log(e.target[2].value)
        axios.post('https://lxam.herokuapp.com/assignments/assignTest', {
            group_id: e.target[0].value,
            test_id: e.target[1].value,
            deadline: e.target[2].value
        })
        history.push('/tests')
    }

    useEffect(() => {
        console.log('effect tests')
       axios("https://lxam.herokuapp.com/tests")
       .then((response) => {
         setUpdatedTests(response.data);
       })
       .catch((error) => {
         console.error("Error fetching data for tests: ", error);
       });

       console.log('effect tests')
       axios("https://lxam.herokuapp.com/groups")
       .then((response) => {
         setUpdatedGroups(response.data);
       })
       .catch((error) => {
         console.error("Error fetching data for tests: ", error);
       });
      }, [])
    return (
        <div className='assignTest'>
            <form onSubmit={handleSubmit}>
                <label for='group'><h3>Choose a Group</h3></label>
                <select name='group' id='group'>
                {updatedGroups.map(i => <option value={i.id}>{i.name}</option>)}
                </select>
                <br />
                <br />
                <label for='test'><h3>Choose a Test</h3></label>
                <select name='test' id='test'>
                {updatedTests.map(i => <option value={i.id}>{i.name}</option>)}
                </select>
                <input type='date' />
                {/* <input type='datetime-local' /> */}
                <button type='submit'>Assign Test</button>
            </form>
            

            
        </div>
    )
}
