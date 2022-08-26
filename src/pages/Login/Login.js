import React, { useState } from 'react';
import './Login.css';
import Title from '../Login/components/Title/Title';
import Label from '../Login/components/Label/Label';
import Input from '../Login/components/Input/Input';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [islogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value);
            setHasError(false);
        } else {
            if (value.length < 6) {
                setPasswordError(true);
                setHasError(false);
            } else {
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
            
        }
    };


    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'Mariapaz' && param.password === "252525") {
                const { user, password } = param;
                let ac = { user, password };
                let account = JSON.stringify(ac);
                localStorage.setItem('accont', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    };
        
    function handleSubmit() {
        let account = { user, password }
        if (account) {
            ifMatch(account);
        }
    }
    return (
        <div className='login-container'>
            {islogin ?
                <div className='home-container'>
                    <h1>¡Hola, {user}! </h1>
                    <label> Felicitaciones, estás logueado.</label>
                </div>
                :
            <div className='login-content'>
                <Title text='¡Bienvenido!' />
                { hasError &&
                    <label className='label-alert'> Su contraseña o usuario son incorrectos, o no existen en nuestra plataforma.</label>
                }
                <Label text='Usuario' />    
                <Input
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            <Label text='Contraseña' />
            <Input
            attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su contraseña' 
                }}
                handleChange={handleChange}
                param={passwordError}
                />
                { passwordError &&
                <label className='label-error'>
                    Contraseña inválida o incompleta
                    </label>
                }
                {password === "252525" && 
                <div className='submit-button-container'>
                  <button onClick={handleSubmit} className='submit-button'>
                    Ingresar
                        </button>   
                    </div>
                }
{/* Restricción sólo para este caso que se pedía ingresar con una clave de "252525" y que apareciera el botón de ingreso. */}
                </div>
            }
        </div>
    )
};

export default Login;