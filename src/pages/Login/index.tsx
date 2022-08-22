import './Card.css'
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signIn(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Dados Incorretos")
            }
        }
    }


    return (
        <Card className='card-login'> 
            <CardContent className='card-input'>
                <Box>
                    <TextField type="text" label={'Login'} value={email} onChange={handleEmail} />
                </Box>
                <Box>
                    <TextField type="password" label={'Senha'} value={password} onChange={handlePassword} />
                </Box>
                <Button variant="contained" onClick={handleLogin}>Logar</Button>
            </CardContent>
        </Card>
    )
}