import React from 'react'
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ApiClient } from '../../../shared/services/ApiClient';

const Register = () => {
    // making the reference of the data of the text field 
    const emailRef = useRef();
    const passwrdRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();

    const doRegister = async () =>{
        const userInfo ={

            "email" : emailRef.current.value,
            "password" : passwrdRef.current.value,
            "name" : nameRef.current.value,
            "phone" : phoneRef.current.value
        }

        try {
            const res = await ApiClient.post(process.env.REACT_APP_REGISTER , userInfo);
            console.log("User Info " , userInfo);
            console.log("res Info " , res);
        }
        catch(err){
            console.log("Error is " , err)
        }
    }

return (
    <Container>
    <TextField inputRef={emailRef}  id="outlined-basic" label="email" variant="outlined" />
    <TextField inputRef={passwrdRef} id="outlined-basic" label="password" type="password" variant="outlined" />
    <TextField inputRef={nameRef} id="outlined-basic" label="name" variant="outlined" />
    <TextField inputRef={phoneRef} id="outlined-basic" label="phone" variant="outlined" />
    <Button onClick={doRegister} variant="contained">Register</Button>
    </Container>
)
}

export default Register;
