
import React, { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        Name:
        <input type="text" onChange={(e) => setName(e.target.value)} required />
        <br /><br />

        Email:
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        <br /><br />

        Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {submitted && <p>Registration Successful!</p>}
    </div>
  );
}

export default Registration;
