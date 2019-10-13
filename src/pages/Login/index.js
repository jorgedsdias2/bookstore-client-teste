import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';
import { notification } from '../../actions/notification';

export default function Login({ history }) {
    const message = useSelector(state => state.notification.message);
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

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
            </form>
        </>
    );
}