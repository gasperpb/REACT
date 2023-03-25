import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar o código para lidar com o envio do formulário de login
    }

    return (
        <div>
            <Typography variant="h4">Tela de Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                    Entrar
                </Button>
            </form>
        </div>
    );
}

export default LoginScreen;