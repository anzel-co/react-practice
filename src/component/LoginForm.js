import React, {useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginForm = props => {
    const auth = useContext(AuthContext)
    const [uname, setUname] = useState('')
    const [pword, setPword] = useState('')
    const [correctCredentials, setCorrectCredentials] = useState(null)
    const [loading, setLoading] = useState(null)
    const [signin, setSignin] = useState(true)
    const [generated, setGenerated] = useState(false)

    const navigate = useNavigate()

    const unameChangeHandler = (e) => {
        setUname(e.target.value)
    }

    const pwordChangeHandler = (e) => {
        setPword(e.target.value)
    }
    const submitFormHandler = (e) => {
        e.preventDefault()
        if (uname === props.username && pword === props.password) {
            setLoading(true)
            setCorrectCredentials(true)
            setTimeout(() => {
                auth.login()
                localStorage.setItem('authenticated', true)
                navigate('/')
            }, 2000)
        } else {
            setCorrectCredentials(false)
        }
    }
    const onGenerateCredentials = () => {
        setGenerated(false)
        let credential = ''
        const str = 'abcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; credential.length < 6; i++) {
            let index = Math.round(Math.random() * (str.length - 1))
            credential += str[index]
        }
        setUname(credential)
        setPword(credential)
    }

    const onRegisterClick = () => {
        setGenerated(true)
        props.setUsername(uname)
        props.setPassword(pword)
    }

    const onSwitchHandler = () => {
        setUname('')
        setPword('')
        setGenerated(false)
        setSignin(!signin)
    }

    const Switch = props => <small className="signinSwitch" onClick={onSwitchHandler}>{props.children}</small>

    const isLoading = () => loading || !signin ? true : false
    const disabled = isLoading()

    return(
        <div className="loginField">
        {signin ? <h1>Sign In</h1> : <h1>Register</h1>}
        <hr />
        <form id='loginForm' onSubmit={submitFormHandler}>
            <label className='formLabel' htmlFor="username">USERNAME</label>
            <input className='formInput' type='text' id='username' value={uname} onChange={unameChangeHandler} disabled={disabled} required/>
            <label className='formLabel' htmlFor="password">PASSWORD</label>
            <input className='formInput' type={signin ? 'password' : 'text'} id='password' value={pword} onChange={pwordChangeHandler} disabled={disabled} required/>
            {!signin && <small className="reminderMessage">This web app is for practice only and has no backend. Generate a username and password below and register.</small>}
            {!signin && <p className="generateCredentials" onClick={onGenerateCredentials}>GENERATE CREDENTIALS</p>}
            {generated && !signin && <small className="generateMessage">Username and password registered. Copy it to sign in.</small>}
            {correctCredentials === false && signin && <p className="errorMessage">Incorrect username or password. Please try again.</p>}
            {signin && <button className='formButton' disabled={disabled} >Login</button>}
            {!signin && <button className='formButton' type='button' onClick={onRegisterClick}>Register</button>}
            {loading === true && <p className="loadingMessage">Loading... Please wait.</p>}
            {!loading && (signin ? <Switch>Create an account</Switch> : <Switch>Sign in to your account</Switch>)}
        </form>
        </div>
    )
}

export default LoginForm