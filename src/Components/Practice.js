import React, {useState} from 'react';
import Game from '../Utils/Game.js';
import '../CSSs/Practice.css';
import Dan_game from '../Utils/Dan_game';

function Practice(){

    const [dan, setDan] = useState();
    const [btnDP, setBtnDP] = useState('');
    const [gameDP, setGameDP] = useState('none');

    const danChoice = e => {
        setDan(e.target.id);
        alert(`${e.target.id}을 선택했습니다.`)
        setGameDP('');
        setBtnDP('none');
    }

    return(
        <div className="Practice_Container">
            <p style={{marginBottom:70}}>연습하기</p>
            <div style={{display:btnDP}}>
                <p>연습할 단을 선택해주세요.</p>
                <button id="1" onClick={danChoice}>1단</button>
                <button id="2" onClick={danChoice}>2단</button>
                <button id="3" onClick={danChoice}>3단</button>
                <button id="4" onClick={danChoice}>4단</button>
                <button id="5" onClick={danChoice}>5단</button>
                <button id="6" onClick={danChoice}>6단</button>
                <button id="7" onClick={danChoice}>7단</button>
                <button id="8" onClick={danChoice}>8단</button>
                <button id="9" onClick={danChoice}>9단</button>
            </div>
            
            <div style={{display:gameDP}}>
                 <Dan_game dan={dan} />
            </div>
            
        
        </div>
    )
}

export default Practice;