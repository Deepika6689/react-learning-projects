import React from 'react';
const Signup = (props) => {
    function close(){
        props.setShowSignup(false)
    }
    return (
        <>
            <div className='overlay'>
                <div className='modal'>
                    <h1>Signup Page</h1>
                    <input type="text" placeholder='Enter username' />
                    <input type="password" placeholder='Enter Email' />
                    <input type="password" placeholder='Enter Mobile NO' />
                    <input type="password" placeholder='Enter Password' />
                    <button>Signup</button>
                    <button onClick={close}>Cancel</button>
                </div>
            </div>
        </>
    );
};

export default Signup;