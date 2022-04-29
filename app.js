import "./styles.css";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleFirst = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const handleLast = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || gender === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none"
        }}
      >
        <h1>User successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none"
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  return (
    <div className="App">
      <h1>Login Form</h1>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <div className="FirstName" type="text" placeholder="firstName"></div>
      <input
        className="input"
        placeholder="First Name"
        type="text"
        onChange={handleFirst}
      />

      <div className="lastName" type="text" placeholder="lastName"></div>
      <input
        className="input"
        placeholder="Last Name"
        type="text"
        onChange={handleLast}
      />
      <div>
        <label for="cars">Choose gender:</label>

        <select name="gender" id="gender" onChange={handleGender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div>
      <p>
        <button class="submit" className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </p>
    </div>
  );
}
