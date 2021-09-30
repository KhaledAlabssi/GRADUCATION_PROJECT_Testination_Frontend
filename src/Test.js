import axios from "axios";
import React, { useState } from "react";

export default function Test({ tests }) {
  const [showTest, setShowTest] = useState(null);
  const [showAnswers, setShowAnswers] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault();
    const questions = await axios.get(`http://localhost:4000/test/questions/${e.target[0].value}`);
    setShowTest(questions.data);
    // console.log(e.target[0].value);
    // console.log(q.data);

    const answers = await axios.get(`http://localhost:4000/test/answers/${e.target[0].value}`)
    setShowAnswers(answers.data)
    console.log(answers.data)


  }

  return (
    <div>
      <h3>Choose Your Test</h3>
      <form onSubmit={handleSubmit}>
        <select>
          {tests.map((i) => {
            return <option value={i.id}>{i.name}</option>;
          })}
        </select>
        <button type="submit">Go</button>
      </form>
      <>{showTest !== null ? 
        <>
        {showTest.map(i => {
            return (
                <>
                <p>{i.body}</p>
                <p>Points: {i.score}</p>
                </>
                
            )
        })}

        {
            showAnswers !== null ?
            <>
            {showAnswers.map(i => {
                return (
                    <>
                        <p>{i.correct}</p>
                        <br />
                        <p>{i.option1}</p>
                        <br />
                        <p>{i.option2}</p>
                        <br />
                        <p>{i.option3}</p>
                        <hr />
                    </>
                )
            })}

            </>
            :
            <>
            <p>No Answers :</p>

            </>
        }

        

        </>
      : 
      <p>No</p>}</>
    </div>
  );
}
