import React from 'react';
const UserData = (props) => {
    return (
        <>
            <h1>Name: {props.a}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Skills: {props.skills}</h2>
            <h2>College: {props.college}</h2>
            <h2>Address: {props.address.city}, {props.address.state}, {props.address.country}</h2>
            <h2>Function:{props.greet()}</h2>
        </>
    )
}
export default UserData