import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const updateEmail = (e) => {
    setEmail(e.target.value)
}
    const updatePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const updatedData = (e) => {
        e.preventDefault()
       console.log(email,password)
    }

    const register = (e) => {
        e.preventDefault()
    console.log("trigered")
}


    return (
        <div className='login'>.
            <Link to='/'>
                <img className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className="login__container">
                <h1> Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={updateEmail} type="email" placeholder='Enter your Email' />
                    <h5>Password</h5>
                    <input value={password} onChange={updatePassword} type="password" placeholder='Enter your Password' />
                    <button className='login__signInButton' onClick={updatedData} >Sign in </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} type='submit' className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login