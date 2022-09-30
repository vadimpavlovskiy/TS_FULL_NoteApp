import React, { FC, useState } from "react";
import { loginUser } from "../axios/usersAxios";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import '../styles/LoginForm.scss'
const LoginForm:FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        loginUser(email, password)
    }
    return (
        <div className="log-form">
            <Input placeholder="Email" type="text" setState={setEmail}/>
            <Input placeholder="Password" type="password" setState={setPassword}/>
            <Button text="Login" onClick={()=>handleSubmit()} />
            <p>Already haven't account? Please, <Link to={'/'}>register</Link></p>
        </div>
    )
}

export default LoginForm;