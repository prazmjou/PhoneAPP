import React, { useState } from 'react';

const LoginForm = ({ onLogin, onUsernameChange, onPasswordChange }) => {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '300px',
    margin: 'auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  };

  return (
     <>
      <div>Please Login</div>
    <form onSubmit={onLogin} style={formStyle}>
      <input type="text" onChange={e => onUsernameChange(e.target.value)} placeholder="Username" style={inputStyle} />
      <input type="password" onChange={e => onPasswordChange(e.target.value)} placeholder="Password" style={inputStyle} />
      <button type="submit" >Login</button>
    </form>
       </>
  );
};

export default LoginForm;
