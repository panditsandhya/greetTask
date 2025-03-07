import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name) {
      setMessage("Name is required.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/greet?name=${name}`
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Welcome to Younglabs</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-100" onClick={getGreeting}>
        Get Greeting
      </button>
      {message && <p className="mt-3 alert alert-info">{message}</p>}
    </div>
  );
};

export default App;
