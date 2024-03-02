import React, { useRef } from 'react'

const LoginApi = () => {

        const usernameRef = useRef();
        const passwordRef = useRef();

        const handleSignInBtn = () => {}
    return (

        <div className='signin-main'>
            <div className='signin-user'>
                <h2><b>Sign</b>In :</h2>
                <div className='signin-body'>
                    <div className='signin-form'>
                        <div className='user-input'>
                            <input ref={usernameRef} type='text' placeholder='&nbsp; Username'></input>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <br/>
                        <div className='password-input'>
                            <input ref={passwordRef} type='password' placeholder='&nbsp; Password'></input>
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </div>
                        <br/>
                        <div className='remember-signin'>
                            <div className='checkbox'>
                                <input type='checkbox'></input>
                                <label for='remember'>&nbsp; &nbsp; Remember Me</label>
                            </div>
                            <div className='signin-btn'>
                                <button onClick={handleSignInBtn} >SignIn</button>
                            </div>
                        </div>
                        <p>I forgot my password !</p>
                    </div>
                </div>
            </div>
            <div className='signin-footrer'>

            </div>
        </div>
    )
};

export default LoginApi;