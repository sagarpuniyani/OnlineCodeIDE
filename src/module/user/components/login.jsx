import React  from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ApiClient } from '../../../shared/services/ApiClient';

const Login = () => {
    const [Message , setMessage ] = useState('');

    const emailRef = useRef();
    const passwrdRef = useRef();

    const  doLogin = async() => {

        const userInfo = {
            "email" : emailRef.current.value,
            "password" : passwrdRef.current.value
        }

        try{

            const res = await ApiClient.post(process.env.REACT_APP_LOGIN , userInfo);
            console.log("response is ",res);
            setMessage(Message => res.data.message);
        }
        catch(err){
            console.log("Error in Login" , err);
            setMessage(Message => "Invalid Email id or Password ")
        }

    }


return (
    <>
    <Container>
    <p> {Message} </p>
    <TextField inputRef={emailRef}  id="outlined-basic" label="email" variant="outlined" />
    <TextField inputRef={passwrdRef} id="outlined-basic" label="password" type="password" variant="outlined" />
    <Button onClick={doLogin} variant="contained">Register</Button>
    </Container>
    </>
)
}

export default Login
