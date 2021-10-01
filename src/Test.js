import axios from "axios";
import React, { useState } from "react";

export default function Test({ tests }) {
  const [showTest, setShowTest] = useState(null);
  const [showAnswers, setShowAnswers] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const questions = await axios.get(
      `http://localhost:4000/test/${e.target[0].value}`
    );
    setShowTest(questions.data);
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
        {showTest !== null ? (
          <>
            <form>
            {showTest.map((i) => {
              return (
                <>
                <label for='question'>{i.body}</label>
                <select name='question'>
                  <option value={i.correct}>{i.correct}</option>
                  <option value={i.option1}>{i.option1}</option>
                  <option value={i.option2}>{i.option2}</option>
                  <option value={i.option3}>{i.option3}</option>
                </select>

                  
                  {/* <p>{i.body}</p>
                  <p>Points: {i.score}</p>
                  <p>answer1: {i.correct}</p>
                  <p>answer2: {i.option1}</p>
                  <p>answer3: {i.option2}</p>
                  <p>answer4: {i.option3}</p> */}
                </>
              );
            })}
            </form>
          </>
        ) : (
          <p>No test is available</p>
        )}
      </>
    </div>
  );
}
