import './Registro.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../Components/Loader/Loader'
import FetchConstants from '../../../../src/Constants/FetchConstants'

const Registro = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        datosUsuario: {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            fechaNacimiento: '',
            genero: '',
        }
    });

    const [status, setStatus] = useState(''); // Estados: 'idle', 'loading', 'success', 'error'

    const [showLoader, setShowLoader] = useState(false);


    const handleChange = (e) => {
        setFormData({
            datosUsuario: {
                ...formData.datosUsuario,
                [e.target.name]: e.target.value,
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowLoader(true);
        setStatus('loading');

        try {
            const response = await fetch(`${FetchConstants.apiUrl}/usuarios`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error en el registro. Por favor intenta nuevamente.');
            }

            const result = await response.json();

            setShowLoader(false);
            setStatus('success')
            toast.success('¡Registro exitoso!');

            setTimeout(() => {                
                navigate('/login');
            }, 5000);
        } catch (error) {
            setStatus('error');
            toast.error(error);
        } finally {
            setStatus('idle')
            setShowLoader(false);
        }
    };

    return (
        <div className="login-container">

            {showLoader && (
                <Loader textCard="Enviando datos..." />
            )}


            <div className="img-container">
                <img className="img" src="./src/assets/Landing/Images/LoginRegistro/formulario.png" alt="formulario-Img" />
            </div>

            <div className="form-container">
                <h2 className="h2-registro">Registrate</h2>

                <form className="form-login" onSubmit={handleSubmit}>
                    <div className="container-row-register">
                        <div>
                            <label className="form-label-register" htmlFor="nombre">Nombre</label>
                            <input
                                className="form-input-login form-input-register"
                                type="text"
                                name="nombre"
                                placeholder='Ingresa tu nombre'
                                value={formData.datosUsuario.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="form-label-register" htmlFor="apellido">Apellido</label>
                            <input
                                className="form-input-login form-input-register"
                                type="text"
                                name="apellido"
                                placeholder='Ingresa tu apellido'
                                value={formData.datosUsuario.apellido}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <label className="form-label-login" htmlFor="email">Direccion de e-mail</label>
                    <input
                        className="form-input-login"
                        type="email"
                        name="email"
                        placeholder='Ingresa tu email'
                        value={formData.datosUsuario.email}
                        onChange={handleChange}
                    />

                    <label className="form-label-login" htmlFor="password">Contraseña</label>
                    <input
                        className="form-input-login"
                        type="password"
                        name="password"
                        placeholder='Ingresa una contraseña'
                        value={formData.datosUsuario.password}
                        onChange={handleChange}
                    />

                    <div className="container-row-register">
                        <div>
                            <label className="form-label-login" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                            <input
                                className="form-input-login form-input-register"
                                type="date"
                                name="fechaNacimiento"
                                value={formData.datosUsuario.fechaNacimiento}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="form-label-login" htmlFor="genero">Género</label>
                            <select
                                className="form-select-register"
                                name="genero"
                                label="Selecciona una opción"
                                value={formData.datosUsuario.genero}
                                onChange={handleChange}
                            >
                                <option hidden value="">Selecciona un genero</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="NoBinario">No Binarie</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>

                    <button className="form-button-registro" type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Registrando...' : 'Registrate'}
                    </button>
                </form>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
            />
        </div>
    );
};

export default Registro;
