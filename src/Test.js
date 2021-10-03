import axios from "axios";
import React, { useState } from "react";
import Question from "./Question";

export default function Test({ tests }) {
  const [showTest, setShowTest] = useState(null);
  const [test, setTest] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(0)

  function nextQuestion (e) {
    if(currentQuestion === (test.length)) {
      console.log('Result is: ', result, 'from total: ', score)


    } else {
      setCurrentQuestion(prev => prev += 1)
      if (e.target.innerHTML === test[currentQuestion].correct) {
        setResult(prev => prev += 1)
      }

    }
    
    
    
    
    
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const questions = await axios.get(
      `http://localhost:4000/test/${e.target[0].value}`
    );
    
    setTest(questions.data)
    setScore(questions.data.length)
    
    
  }
  function testSubmission(e) {
    e.preventDefault()
    axios.post('http://localhost:4000/results/submit', {
    })
    console.log(e.target)
    console.log(e.target[3].value)
    console.log(e)
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
      <>
      {test !== null ? (
          <>
          <h1>Test is ready</h1>
          <Question 
          currentQuestion={currentQuestion} 
          test={test}
          nextQuestion={nextQuestion}
          score={score}
          result={result}
          />
          </>
      ):(
        <>
        <h1>Test is not ready</h1>
        </>
      )}















        {/* {showTest !== null ? (
          <>
            <form onSubmit={testSubmission}>
              {showTest.map((i) => {
                return (
                  <>
                    <p>Question points: {i.score}</p>
                    
                    <label for="question">{i.body}</label>
                    <br />
                    <input type="radio" name={i.body} id="correct" value={i.correct} />
                    <label for="correct">{i.correct}</label>
                    <br />
                    <input type="radio" name={i.body} id="option1" value={i.option1} />
                    <label for="option1">{i.option1}</label>
                    <br />
                    <input type="radio" name={i.body} id="option2" value={i.option2} />
                    <label for="option2">{i.option2}</label>
                    <br />
                    <input type="radio" name={i.body} id="option3" value={i.option3} />
                    <label for="option3">{i.option3}</label>
                    <br />
                    <input type='text' id='id' value={i.id} hidden></input>
                  </>
                );
              })}
              <button type='submit'>Submit</button>
            </form>
          </>
        ) : (
          <p>No test is available</p>
        )} */}
      </>
    </div>
  );
}
