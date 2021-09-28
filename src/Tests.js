import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Test({ tests, setCurrentTest }) {
  const [test, setTest] = useState(false);
  async function handleOpen(e) {
    const v = await axios.get(`http://localhost:4000/tests/${e.target.value}`);
    await setTest(v.data);
    console.log(v.data)
    setCurrentTest(e.target.value)
  }
  return (
    <div className="tests">
      {test === false ? (
        <>
          <Link to="/newTest">
            <button>Create new Test</button>
          </Link>
          {tests.map((i) => {
            return (
              <>
                <h3>{i.name}</h3>
                <button>Assign Test</button>
                <button onClick={handleOpen} value={i.id}>
                  Open
                </button>
                <hr />
              </>
            );
          })}
        </>
      ) : (
        <div className='test'>
          {test.map((i) => {
            console.log(test)
            return <p>{i.body}</p>;
          })}
        </div>
      )}
      <Link to='newQuestion'><button>Add Questions</button></Link>
      <Link to="/"><button>Back to Main Page</button></Link>
    </div>
  );
}
