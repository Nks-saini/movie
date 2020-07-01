import React, { useState } from "react";

export default function Login({ history }) {
  const [name, setCode] = useState("");
  const [password, setMobile] = useState("");
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);

  function submit() {
    const frmdetails = {
      name: name,
      password: password,
    };
    console.log(frmdetails);

    if (name && password) {
      var x = localStorage.getItem("hash");
      var y = JSON.parse(x);
      console.log(y);
      var n1 = y.name;
      var p1 = y.password;

      if (frmdetails.name === n1 && frmdetails.password === p1) {
        console.log("true");
        history.push("/home");
      } else {
        setCheck1(true);
        console.log("wrong");
      }
    } else {
      setCheck(true);
      console.log("please fill form");
    }
  }

  return (
    <div>
      <p>Login </p>
      <p style={{ color: "red" }}>
        {check ? "Please Fill name & password " : null}
      </p>

      <h4>
        Name :
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setCode(e.target.value)}
        />
      </h4>
      <h4>
        Password :
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setMobile(e.target.value)}
        />
      </h4>

      <br />
      <button onClick={() => submit()}>Submit</button>
      <p style={{ color: "red" }}>{check1 ? "invalid credentials" : null}</p>
      <hr />
    </div>
  );
}
