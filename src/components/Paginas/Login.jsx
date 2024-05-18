import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí podrías realizar la autenticación con el backend
    if (email === 'usuario@example.com' && password === 'password') {
      // Aquí podrías redirigir al usuario a la página de inicio
      console.log('Inicio de sesión exitoso');
    } else {
      setErrorMessage('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-container-titulo">Iniciar Sesión</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleLogin}>

        <div className="form-email">
          <label className="form-group-email" htmlFor="email">Correo Electrónico:</label>
          <input className="form-group-email-input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-password">
          <label className="form-group-password" htmlFor="password">Contraseña:</label>
          <input className="form-group-password-input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button className="login-btn" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
