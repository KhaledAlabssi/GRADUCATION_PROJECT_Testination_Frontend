import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Groups({ groups, setCurrentGroup }) {
  const [group, setGroup] = useState(false);
  async function handleOpen(e) {
    const v = await axios.get(`http://localhost:4000/groups/${e.target.value}`);
    setGroup(v.data);
    setCurrentGroup(e.target.value)
  }
  return (
    <div className="groups">
      {group === false ? (
        <>
          <Link to="/newGroup">
            <button>Create new group</button>
          </Link>
          {groups.map((i) => {
            // console.log(i)
            return (
              <>
                <h3>{i.name}</h3>
                <button onClick={handleOpen} value={i.id}>
                  Open
                </button>
                <button>Assign Test</button>
                <hr />
              </>
            );
          })}
        </>
      ) : (
        <>
          {group.map((i) => {
            
            return (
              <div className='group'>
                <p>{i.first_name} {i.last_name}</p>
              </div>
            )
          })}
          <Link to='newStudent'><button>Add students</button></Link>
          <Link to="/"><button>Back to Main Page</button></Link>
        </>
      )}
    </div>
  );
}
