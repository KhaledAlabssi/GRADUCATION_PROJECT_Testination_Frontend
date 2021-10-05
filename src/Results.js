import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Results() {
    const [results, setResults] = useState(null)

    useEffect(() => {
        console.log('effect groups')
        axios("http://localhost:4000/results/allResults")
          .then((response) => {
            setResults(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data for Groups: ", error);
          });
      }, [])

    return (
        <div>
            {results !== null ? (
            <>
            {results.map(i => {
                return (
                    <>
                    <p>Student name: {i.first_name}</p>
                    <br />
                    <p>Score: {i.result} out of {i.score}</p>
                    <br />
                    <p>Participate in test: {i.name}</p>
                    </>
                )
            })}
            </>
            ):(
            <p>Nothing to show for now</p>
            )}
            
        </div>
    )
}
