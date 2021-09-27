import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Groups({ groups }) {
    const [group, setGroup] = useState(false)
  async function handleEdit(e) {
    const v = await axios.get(`http://localhost:4000/groups/${e.target.value}`);
    setGroup(v.data);
    console.log(v.data[0]);
  }
  return (
    <div className="groups">
      {group === false ? 
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

      </> : 
      <>
      {console.log(group)}
      {group.map(i => {
      return <p>{i.first_name}</p>})}
      
      </>
      }
      
    </div>
  );
}
