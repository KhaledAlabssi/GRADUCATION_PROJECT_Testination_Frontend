import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";


export default function NewQuestion({ tests }) {
  const history = useHistory()
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [updatedTest, setUpdatedTest] = useState(tests)
  useEffect(() => {
    axios("https://lxam.herokuapp.com/questions/current")
      .then((response) => {
        setCurrentQuestion(response.data[0].id);
      })
      .catch((error) => {
        console.error(
          "Error fetching data fro currentQuestion from NewQuestion",
          error
        );
      });

      axios("https://lxam.herokuapp.com/tests")
    .then((response) => {
      setUpdatedTest(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data for tests: ", error);
    });
  }, [setCurrentQuestion]);

  function handleSubmit(e) {
    e.preventDefault();
    const n = Number(e.target.correct.value) + 1
    console.log('here is n: ',n)
    axios.post("https://lxam.herokuapp.com/questions/new", {
      body: e.target.question.value,
      option_1: e.target.option_1.value,
      option_2: e.target.option_2.value,
      option_3: e.target.option_3.value,
      option_4: e.target.option_4.value,
      correct: e.target[n].value,
      teacher_id: 1,
      score: 1
    });
    setCurrentQuestion((prev) => (prev += 1));

    axios.post("https://lxam.herokuapp.com/questions/toTest", {
      test_id: e.target.test.value,
      question_id: currentQuestion + 1,
    });

    history.push('/tests')
  }
  return (
    <div className="newQuestion">
      <form onSubmit={handleSubmit}>
        <h3>New Question</h3>
        <section>
          <input type="text" placeholder="Question" name='question'/> 
          <br />
          <select name="test" id="test">
            {updatedTest.map((i) => (
              <option name='test' value={i.id}>Test: {i.name}</option>
            ))}
          </select>
          <br />
        </section>
        <section>
          <h5>Answer Options:</h5>
          
          <input name='option_1' type="text" placeholder="Option 1" />
          <br />
          <input name='option_2' type="text" placeholder="Option 2" />
          <br />
          <input name='option_3' type="text" placeholder="Option 3" />
          <br />
          <input name='option_4' type="text" placeholder="Option 4" />
          <br />
          <select name='correct'>
            <option name='correct' value='1'>Option 1 is the correct answer</option>
            <option name='correct' value='2'>Option 2 is the correct answer</option>
            <option name='correct' value='3'>Option 3 is the correct answer</option>
            <option name='correct' value='4'>Option 4 is the correct answer</option>
          </select>
        </section>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
