import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Groups({ groups, setCurrentGroup }) {
  const [group, setGroup] = useState(false);
  const [updatedGroups, setUpdatedGroups] = useState(groups)
  async function handleOpen(e) {
    const v = await axios.get(`http://localhost:4000/groups/${e.target.value}`);
    setGroup(v.data);
    setCurrentGroup(e.target.value);
  }

  useEffect(() => {
    console.log('effect groups')
    axios("http://localhost:4000/groups")
      .then((response) => {
        setUpdatedGroups(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data for Groups: ", error);
      });
  }, [])
  return (
    <div className="groups">
      <Link to="/newGroup">
        <button className="groups-button">Create new group</button>
      </Link>
      {group === false ? (
        <>
          <div className="groups-box">
            {updatedGroups.map((i) => {
              // console.log(i)
              return (
                <div className="group-box">
                  <h3>{i.name}</h3>
                  <section>
                  <Link to='/assignTest'><button>Assign Test</button></Link>
                    <button onClick={handleOpen} value={i.id}>
                      Open
                    </button>
                    
                  </section>
                  {/* <hr /> */}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className='group-sec'>
          {group.map((i) => {
            return (
              <div className="group">
                <p>
                  {i.first_name} {i.last_name}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <Link to="newStudent">
        <button className="groups-button-blue">Add students</button>
      </Link>
      <Link to="/main">
        <button className="groups-button-blue">Back to Main Page</button>
      </Link>
    </div>
  );
}
