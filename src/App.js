import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Home from './Home';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Groups from './Groups';

function App() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    axios('http://localhost:4000/groups')
      .then(response => {
        setGroups(response.data)
      })
      .catch(error => {
        console.error('Error fetching data for Groups: ', error)
        
      })
    
    
    
  }, [])
  return (
    <div className="App">
      <Nav />
      {/* <Sidebar /> */}
      {/* <Home /> */}
      <Groups groups={groups} />

      
      
    </div>
  );
}

export default App;
