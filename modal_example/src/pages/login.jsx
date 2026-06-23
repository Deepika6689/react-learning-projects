import React from 'react';
const Login = (props) => {
    function close(){
        props.setShowLogin(false)
    }
    return (
        <>
            <div className='overlay'>
                <div className='modal'>
                    <h1>Login Page</h1>
                    <input type="text" placeholder='Enter username' />
                    <input type="password" placeholder='Enter Password' />
                    <button>Login</button>
                    <button onClick={close}>Cancel</button>
                </div>
            </div>
        </>
    );
};

export default Login;