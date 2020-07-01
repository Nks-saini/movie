import React, { useState } from "react";

// const axios = require("axios");


export default function Register() {
  const [name, setCode] = useState("");
  const [password, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [proffesion, setProfession] = useState("");



  function submit() {
    const frmdetails = {
        name: name,
        password: password,
        email:email,
        phone:phone,
        proffesion:proffesion
    };
    console.log(frmdetails);
    window.localStorage.setItem(
        "hash",
        JSON.stringify(frmdetails)
      );
  }


  return (
    <div>

        <p>Register</p>
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
      <h4>
        Email :
        <input
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </h4>
      <h4>
        Phone No :
        <input
          type="text"
          placeholder="Enter phone no"
          onChange={(e) => setPhone(e.target.value)}
        />
      </h4>
      <h4>
        Profession :
        <select
          onChange={(e) => setProfession(e.target.value)}
        > 
            <option value="N/A">N/A</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Coder">Coder</option>
        </select>
      </h4>

      <br />
      <button onClick={() => submit()}>Submit</button>
      <hr />
    </div>
  );
}
