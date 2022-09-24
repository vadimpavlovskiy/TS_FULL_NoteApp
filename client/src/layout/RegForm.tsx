import React, { FC, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import '../styles/RegForm.scss';

const RegForm:FC = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');

    return (
        <div className="reg-form">
            <h2>Registration Form</h2>
            <Input type="text" setState={setEmail} placeholder="Email"/>
            <Input type="password" setState={setPassword} placeholder="Password"/>
            <Input type="text" setState={setFirst} placeholder="First Name"/>
            <Input type="text" setState={setSecond} placeholder="Second Name"/>
            <Button text='Register' onClick={()=>console.dir({email, password, first, second})} />
            <p>Already have an account? Please, log in</p>
            <a href="#">Login</a>
        </div>
    )
}

export default RegForm;