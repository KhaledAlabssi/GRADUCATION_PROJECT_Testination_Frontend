import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Test({ tests, setCurrentTest }) {
  const [test, setTest] = useState(false);
  const [updatedTest, setUpdatedTest] = useState(tests)
  async function handleOpen(e) {
    const v = await axios.get(`https://lxam.herokuapp.com/tests/${e.target.value}`);
    await setTest(v.data);
    console.log(v.data)
    setCurrentTest(e.target.value)
  }
   useEffect(() => {
     console.log('effect tests')
    axios("https://lxam.herokuapp.com/tests")
    .then((response) => {
      setUpdatedTest(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data for tests: ", error);
    });
   }, [])


  return (
    <div className="tests">
      <Link to="/newTest">
        <button className='newTest'>Create new Test</button>
      </Link>
      {test === false ? (
        <>
          
          {updatedTest.map((i) => {
            return (
              <>
              <section className='testBox'>
                <h3>{i.name}</h3>
                <div>
                <Link to='/assignTest'><button>Assign Test</button></Link>
                <button onClick={handleOpen} value={i.id}>
                  Open
                </button>
                </div>
                
                
              </section>
              <hr />
              </>
              
            );
          })}
        </>
      ) : (
        <div className='test'>
          {test.map((i) => {
            console.log(test)
            return <section className='testBox'><p>{i.body}</p></section>;
          })}
          
          
        </div>
      )}
      <Link to='newQuestion'><button className='tests-button'>Add Questions</button></Link>
      <Link to="/main"><button className='tests-button'>Back to Main Page</button></Link>
    </div>
  );
}
