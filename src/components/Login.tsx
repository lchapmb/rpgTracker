import React, { useState } from "react";

import UseForm from "../hooks/UseForm";

function Login() {
  // defining the initial state for the form
  const initialState = {
    email: "",
    password: "",
  };

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = UseForm(
    loginUserCallback,
    initialState
  );

  // a submit function that will execute upon form submission
  async function loginUserCallback() {
    // send "values" to database
  }

  return (
    // don't mind this ugly form :P
    <form>
      <div>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
          required
        />

        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
          required
        />
        <button type="submit" onClick={onSubmit}>
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
