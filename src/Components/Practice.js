import React, { useState } from 'react';
import Game from '../Utils/Game.js';
import '../CSSs/Practice.css';
import Dan_game from '../Utils/Dan_game';
import Practice2 from './Practice2';
import Game_choice from '../Utils/Game_choice';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// 문제연습은 객관식
// 시험보기만 주관식


function Practice() {

    const [dan, setDan] = useState();
    const [btnDP, setBtnDP] = useState('');
    const [gameDP, setGameDP] = useState('none');

    const danChoice = e => {
        setDan(e.target.id);
        alert(`${e.target.id}을 선택했습니다.`)
        setGameDP('');
        setBtnDP('none');
    }

    return (
        <div className="Practice_Container">
            <div style={{ display: gameDP }}>
                <Game_choice dan={dan} />
            </div>

            <div style={{ display: btnDP }}>
                <div className="Practice_imgbox">
                    Imgae
                </div>
                <p>연습하고자 하는 구구단을 선택하세요</p>
                <div>
                    <button className="Practice_Btn" id="2" onClick={danChoice}>2단</button>
                    <button className="Practice_Btn" id="3" onClick={danChoice}>3단</button>
                    <button className="Practice_Btn" id="4" onClick={danChoice}>4단</button>
                    <button className="Practice_Btn" id="5" onClick={danChoice}>5단</button>
                </div>
                <div>
                    <button className="Practice_Btn" id="6" onClick={danChoice}>6단</button>
                    <button className="Practice_Btn" id="7" onClick={danChoice}>7단</button>
                    <button className="Practice_Btn" id="8" onClick={danChoice}>8단</button>
                    <button className="Practice_Btn" id="9" onClick={danChoice}>9단</button>
                </div>
                <button className="Practice_Btn2" id="all">모두</button>

            </div>

            
        </div>
    )
}

export default Practice;