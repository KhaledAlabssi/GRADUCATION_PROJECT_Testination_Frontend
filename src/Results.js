import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Results() {
    const [results, setResults] = useState(null)

    useEffect(() => {
        console.log('effect groups')
        axios("https://lxam.herokuapp.com/results/allResults")
          .then((response) => {
            setResults(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data for Groups: ", error);
          });
      }, [])

    return (
        <div className='result-page'>
            {results !== null ? (
            <>
            <table>
                        <tr>
                            <th>Studetn First Name</th>
                            <th>Score</th>
                            <th>Test</th>
                        </tr>
            {results.map(i => {
                return (
                    // <div className='result'>
                    // <p>Student name: {i.first_name}</p>
                    // <br />
                    // <p>Score: {i.result} out of {i.score}</p>
                    // <br />
                    // <p>Participate in test: {i.name}</p>
                    // </div>
                    <tr>
                        <td>{i.first_name}</td>
                        <td>{i.result} out of {i.score}</td>
                        <td>{i.name}</td>
                    </tr>
                    

                    
                )
            })}
            </table>
            </>
            ):(
            <p>Nothing to show for now</p>
            )}
            
        </div>
    )
}
