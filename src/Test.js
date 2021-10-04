import axios from "axios";
import React, { useState } from "react";
import Question from "./Question";
export default function Test({ tests }) {
  const [showTest, setShowTest] = useState(null);
  const [test, setTest] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(0)
  const [test_id, setTest_id] = useState(null)

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

  async function openTest(e) {
    e.preventDefault();
    const questions = await axios.get(
      `http://localhost:4000/test/${e.target[0].value}`
    );
    setTest_id(e.target[0].value)
    setTest(questions.data)
    setScore(questions.data.length)
  }

  function submitTest() {
    axios.post('http://localhost:4000/answers/new', {
      test_id: test_id,
      student_id: 56,
      score: score,
      result: result
    })
  }

  return (
    <div>
      <h3>Choose Your Test</h3>
      <form onSubmit={openTest}>
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
          submitTest={submitTest}
          test_id={test_id}
          />
          </>
      ):(
        <>
        <h1>Test is not ready</h1>
        </>
      )}
      </>
    </div>
  );
}
