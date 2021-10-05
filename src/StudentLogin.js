import axios from "axios";
import React, { useState } from "react";


export default function StudentLogin() {
  const [student, setStudent] = useState(null);
  const [groups, setGroups] = useState(null);
  const [availableTests, setAvailableTests] = useState(null);
  const [ready, setReady] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [test_id, setTest_id] = useState(null);
  const [loged, setLoged] = useState(false)

  function studentLogin(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/student/getStudent", {
        email: e.target.email.value,
        password: e.target.pass.value,
      })
      .then((response) => {
        console.log(response.data[0]);
        setStudent(response.data[0]);
        axios
          .post("http://localhost:4000/student/getStudentTest", {
            student_id: response.data[0].id,
          })
          .then((res) => {
            setGroups(res.data[0].group_id);
            console.log("Your groups are: ", res.data[0].group_id);
            axios
              .post("http://localhost:4000/student/getTest", {
                group_id: res.data[0].group_id,
              })
              .then((r) => {
                console.log("wow", r.data);
                setAvailableTests(r.data);
                setTest_id(r.data[0].test_id);
                setTotalPoints(r.data.length);
                setLoged(true)
                
              });
          });
      });
  }
  function nextQuestion(e) {
    if (currentQuestion === availableTests.length - 1) {
      console.log("Result is: ", score, "from total: ", totalPoints);
      setReady(true)
      submitTest()
    } else {
      setCurrentQuestion((prev) => (prev += 1));
      if (e.target.innerHTML === availableTests[currentQuestion].correct) {
        setScore((prev) => (prev += 1));
      }
    }
  }

  function submitTest() {
    axios.post("http://localhost:4000/answers/new", {
      test_id: test_id,
      student_id: student.id,
      score: totalPoints,
      result: score,
    });
  }
  return (
    <div>
        <div className={loged ? 'none' : 'bla'}>
          <div className='login'>
      <form onSubmit={studentLogin} >
        <h2>Login as Student</h2>
        <input name="email" type="text" placeholder="email" />
        <input name="pass" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      </div>
      </div>
      {availableTests !== null ? (
          
        <div className='test-student-body'>
        {ready !== true ? (<>
            
          <h3>Question: {availableTests[currentQuestion].body}</h3>
          <br />
          <button className="answer-button" onClick={nextQuestion}>
            {availableTests[currentQuestion].option_1}
          </button>
          <br />
          <button className="answer-button" onClick={nextQuestion}>
            {availableTests[currentQuestion].option_2}
          </button>
          <br />
          <button className="answer-button" onClick={nextQuestion}>
            {availableTests[currentQuestion].option_3}
          </button>
          <br />
          <button className="answer-button" onClick={nextQuestion}>
            {availableTests[currentQuestion].option_4}
          </button></>):(<><p>Thanks for submitting the test.</p>
          <br />
          <p>Your score is: {score} out of {totalPoints}</p></>)}
        
          
        </div>
      ) : (
        <><p></p></>
      )}
    </div>
  );
}
