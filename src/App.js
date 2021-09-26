import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Groups from "./Groups";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewGroup from "./NewGroup";

function App() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios("http://localhost:4000/groups")
      .then((response) => {
        setGroups(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data for Groups: ", error);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Sidebar /> */}
        {/* <Home /> */}
        
        <Switch>
          <Route exact path='/groups'>
            <Groups groups={groups} />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/newGroup'>
            <NewGroup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
