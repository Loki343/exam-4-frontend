import React, { useState } from "react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: pass,
      name: name,
      gender: gender,
    };
    //connecting frontend with backend
    fetch("https://panicky-goose.cyclic.app/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <div>
        Email:{" "}
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:{" "}
        <input
          type="password"
          placeholder="Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        Name:{" "}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Gender:{" "}
        <input
          type="text"
          placeholder="Enter your gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Registration;
