import React from "react";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [pass, setpassword] = useState("");

  const handleLogin = () => {
    const payload = {
      email,
      password: pass,
    };

    // connecting FE with BE
    fetch("https://panicky-goose.cyclic.app/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>login Page</h1>
      <input
        placeholder="Enter email"
        type="text"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />
      <input
        placeholder="Enter password"
        type="password"
        onChange={(e) => setpassword(e.target.value)}
        value={pass}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
