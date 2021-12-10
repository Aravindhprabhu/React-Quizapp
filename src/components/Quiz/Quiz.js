// import React, { Component } from 'react';
import React from 'react';
import './Quiz.css';
// import Quiz from '../Quiz/Quiz';

const Quiz =(props) => {
 return (
    <div className= "Main-Content">
        <h1>Adol Quiz!</h1>
        <h2>This Quiz contains 5 Questions</h2>
        <h2>Each questions carries 1 Mark</h2>
        <center>
            <button onClick = {props.clickevent}>Test your Skill</button>
        </center>
    </div>

        )


}

export default Quiz;