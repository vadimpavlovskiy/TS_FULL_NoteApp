import React, { FC, useState } from "react";
import { createUser } from "../axios/usersAxios";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import '../styles/layoutStyles/RegForm.scss';

const RegForm:FC = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');


    let fullName = ''.concat(first, ' ', second);

    const handleSubmit = () => {
        const user = createUser(email, password, fullName);
    }
    return (
        <div className="reg-form">
            <h2>Registration Form</h2>
            <Input type="text" setState={setEmail} placeholder="Email"/>
            <Input type="password" setState={setPassword} placeholder="Password"/>
            <Input type="text" setState={setFirst} placeholder="First Name"/>
            <Input type="text" setState={setSecond} placeholder="Second Name"/>
            <Button text='Register' onClick={()=>handleSubmit()} />
            <p>Already have an account? Please,  <Link to={'/login'}>log in</Link></p>
        </div>
    )
}

export default RegForm;