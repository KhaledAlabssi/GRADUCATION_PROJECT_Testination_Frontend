import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Groups({ groups }) {
  const [group, setGroup] = useState(false);
  async function handleEdit(e) {
    const v = await axios.get(`http://localhost:4000/groups/${e.target.value}`);
    setGroup(v.data);
    console.log(v.data[0]);
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
                <button onClick={handleEdit} value={i.id}>
                  Edit
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
          <Link to="/"><button>Back to Main Page</button></Link>
        </>
      )}
    </div>
  );
}
