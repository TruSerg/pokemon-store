import React from "react";
import { Button } from "@mui/material";

const LoginForm = ({ formValue, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={formValue.email}
        name="email"
        onChange={onChange}
      />
      <input
        type="password"
        value={formValue.password}
        name="password"
        onChange={onChange}
      />
      <button role="submit">Login</button>
    </form>
  );
};

export default LoginForm;
