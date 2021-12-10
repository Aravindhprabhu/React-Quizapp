import React from 'react';
import './Score.css';

const Score =(props) => {
    return (
    <div className="Score">
    <h2>
         Your score :
            {
             props.score <props.total && props.score> 1?(
             <span> {props.score}/{props.total}(Not Bad!)</span>
             ): 
             props.score <=1? (
                <span>{props.score}/{props.total}(Need to be improve your react knowledge...!)
                </span>
             ) : (
                 <span> {props.score}/{props.total}(Very Good!!!)</span>
             )
             }
            </h2>
    </div>
        )
}

export default Score;