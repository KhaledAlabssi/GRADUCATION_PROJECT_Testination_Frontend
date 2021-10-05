import React, { useState } from "react";
import { useHistory } from "react-router";
import Main from "./Main";

export default function TeacherLogin() {
  const history = useHistory();
  const [logged, setLogged] = useState(false);

  function teacherLogin(e) {
    e.preventDefault();
    if (
      e.target.username.value === "khaled" &&
      e.target.pass.value === "khaledredi"
    ) {
      setLogged(true);
      history.push("/main");
    }
  }
  return (
    <div className='login'>
      <form onSubmit={teacherLogin}>
        <h2>Login as a Teacher</h2>
        <input name="username" type="text" placeholder="username" />
        <input name="pass" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
