import React from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
    greet: "Hello",
    firstName: "Dibyendu",
    lastName: "Das"
};

const element = <h2>{getMessage(user)}</h2>

function getMessage(userObj)
{
    return userObj.greet + " " + getformattedName(userObj.firstName, userObj.lastName);
}

function getformattedName(firstName, lastName)
{
    return firstName + " " + lastName;
}

function App() {
    return (
        element
    );
}

export default App;