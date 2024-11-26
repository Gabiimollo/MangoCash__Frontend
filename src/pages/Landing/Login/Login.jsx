import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../Components/Loader/Loader'
import FetchConstants from '../../../../src/Constants/FetchConstants'

import AutenticacionPNG from '../../../../public/assets/Landing/Images/LoginRegistro/autenticacion.png'

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que se recargue la página al hacer submit

    setStatus('loading');
    setShowLoader(true);
    
    try {
      const response = await fetch(`${FetchConstants.apiUrl}/auth/login`, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }

      const result = await response.json();
      const { token } = result; // Asegúrate de que estos campos estén en la respuesta

      // Guardar el token y usuario en el localStorage
      localStorage.setItem('token', token);

      toast.success('¡Inicio de sesión exitoso!');
      setStatus('success');
      
      // Redirigir al dashboard
      navigate('/app/dashboard');
      
    } catch (error) {
      console.log(error)
      toast.error('Hubo un problema al iniciar sesión. Verifica tus credenciales.');
      setStatus('error');
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <>
      <div className="login-container">
        {showLoader && <Loader textCard="Iniciando sesión..." />}

        <div className="form-container">
          <h2 className="h2-login">Iniciar Sesión</h2>

          <form className="form-login" onSubmit={handleSubmit}>
            <label className="form-label-login" htmlFor="email">Dirección de e-mail</label>
            <input
              className="form-input-login"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />

            <div className="container-label-contraseña">
              <label className="form-label-login" htmlFor="password">Contraseña</label>
              <a className="form-a-login" href="#">¿Olvidaste la contraseña?</a>
            </div>

            <input
              className="form-input-login"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />

            <button className="form-button" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>
        </div>

        <div className="img-container">
          <img
            className="img"
            src={AutenticacionPNG}
            alt="autenticacion"
          />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default Login;
