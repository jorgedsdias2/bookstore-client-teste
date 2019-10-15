import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';
import { notification } from '../../actions/notification';

export default function Login({ history }) {
    const message = useSelector(state => state.notification.message);
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    useEffect(() => {
        var body = document.body;

        body.classList.add('bg-gradient-primary');

        return function clean() {
            body.classList.remove('bg-gradient-primary');
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await api.post('/api/auth/login', { email, password }).then(response => {

            const { token } = response.data;

            localStorage.setItem('token', token);

            history.push('/');
            
        }).catch(() => {
            dispatch(notification('Invalid Login. Please try again!'));
            history.push('/login');
        });
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome to Bookstore!</h1>
                                            </div>
                                            {
                                                message ? (
                                                    <p class="text-warning">{message}</p>
                                                ) : (
                                                    null
                                                )
                                            }
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input 
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className="form-control form-control-user"
                                                        placeholder="E-mail"
                                                        value={email}
                                                        onChange={event => setEmail(event.target.value)}
                                                    />
                                                    {/* <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." /> */}
                                                </div>
                                                <div className="form-group">
                                                    <input 
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        className="form-control form-control-user"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={event => setPassword(event.target.value)}
                                                    />
                                                    {/* <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" /> */}
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" for="customCheck">Remember Me</label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                                {/* <a href="index.html" className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </a> */}
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1>LOGIN</h1>
            <p>
                Please sign in
            </p>

            {message}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <label htmlFor="password">Password *</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit">Sign in</button>
            </form> */}
        </>
    );
}