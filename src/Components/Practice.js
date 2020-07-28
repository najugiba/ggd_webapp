import React from 'react';
import Game from '../Utils/Game.js';
import '../CSSs/Practice.css';

function Practice(){
    return(
        <div className="Practice_Container">
            <p style={{marginBottom:70}}>연습하기</p>
            <Game />
        </div>
    )
}

export default Practice;