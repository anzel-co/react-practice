import React, { useState } from "react";
import LoginForm from "../component/LoginForm";

const Auth = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <div className="auth">
        <LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>
        </div>
    )
}

export default Auth