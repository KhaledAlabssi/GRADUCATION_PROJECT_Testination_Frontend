import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Groups from "./Groups";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewGroup from "./NewGroup";
import NewTest from "./NewTest";
import Tests from './Tests'
import Main from "./Main";
import NewStudents from "./NewStudents";
import NewQuestion from "./NewQuestion";
import AssignTest from "./AssignTest";
import Test from "./Test";
import StudentLogin from "./StudentLogin";
import Results from "./Results";
import TeacherLogin from "./TeacherLogin";

function App() {
  const [groups, setGroups] = useState([]);
  const [tests, setTests] = useState([])
  const [currentGroup, setCurrentGroup] = useState(null)
  const [currentTest, setCurrentTest] = useState(null)
  const [currentTeacher, setCurrentTeacher] = useState(1)
  const [refreshNeeded, setrefreshNeeded] = useState(0)
  const hoursMinSecs = {hours:0, minutes: 9, seconds: 59}

 

  useEffect(() => {
    console.log('uesEffect been called!')
    axios("https://lxam.herokuapp.com/groups")
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data for Groups: ", error);
      });

      axios("https://lxam.herokuapp.com/tests")
      .then((response) => {
        setTests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data for tests: ", error);
      });
  }, [setGroups, setTests, setCurrentGroup, setCurrentTest]);
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Sidebar /> */}
        {/* <Home /> */}
        
        <Switch>
          <Route exact path='/groups'>
            <Groups groups={groups} setCurrentGroup={setCurrentGroup} />
          </Route>
          <Route exact path='/tests'>
            <Tests tests={tests} setCurrentTest={setCurrentTest} />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/newGroup'>
            <NewGroup setCurrentGroup={setCurrentGroup} />
          </Route>
          <Route exact path='/newTest'  >
            <NewTest />
          </Route>
          <Route exact path='/main'>
            <Main />
          </Route>
          <Route exact path='/newStudent'>
          <NewStudents groups={groups} /> 
          </Route>   
          <Route exact path='/newQuestion'>
          <NewQuestion tests={tests} /> 
          </Route>
          <Route exact path='/assignTest'>
          <AssignTest tests={tests} groups={groups} /> 
          </Route>
          <Route exact path='/test'>
            <Test tests={tests} />  
          </Route>  
          <Route exact path='/studentLogin'>
            <StudentLogin hoursMinSecs={hoursMinSecs} />  
          </Route>
          <Route exact path='/teacherLogin'>
            <TeacherLogin />  
          </Route>
          <Route exact path='/results'>
            <Results  />  
          </Route>      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
