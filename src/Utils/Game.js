import React, {useState} from 'react';
import '../CSSs/Game.css';

let generateRandom = function (min, max) {
    let ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
}

let randnum1, randnum2;
randnum1 = generateRandom(2,9);
randnum2 = generateRandom(2,9);

const makeRandom = () => {
    randnum1 = generateRandom(2,9);
    randnum2 = generateRandom(2,9);
}


function Game(){
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [descDP, setDescDP] = useState('');
    const [gameDP, setGameDP] = useState('none');
    const [resultDP, setResultDP] = useState('none');

    return(
        <div>
            <div className="desc_box" style={{display:descDP}}>
                <button onClick={e=>{
                    setDescDP('none');
                    setGameDP('');
                    setResultDP('none');
                }}>시작하기</button>
            </div>

            <div className="gugudan_box" style={{display:gameDP}}>
                <p className="text" style={{width:'100%'}}>{randnum1}</p>
                    <p className="text" style={{width:'100%'}}>
                        <p className="text" style={{width:'100%'}}><span className="text" style={{marginLeft:'0'}}>x</span> <span className="text">{randnum2}</span></p> 
                    </p>
                <input 
                    type="text" 
                    value={answer} 
                    onChange={e=> setAnswer(e.target.value)}
                    onKeyPress={e=>{
                        if(e.key === 'Enter'){
                            if(Number(answer) === (randnum1 * randnum2)){
                                alert("정답입니다");
                                setCount(count + 1);
                                setScore(score + 1);
                                makeRandom();
                                setAnswer('');
                            }else{
                                alert(`오답입니다. 정답: ${randnum1*randnum2}`)
                                setCount(count + 1);
                                makeRandom();
                                setAnswer('');
                            }
                            if(Number(count) === 9){
                                setGameDP('none');
                                setResultDP('');
                            }
                        }
                    }
                    }
                >
                </input>
                <div>
                    문제 수 : {count}/10 
                </div>
                
            </div>

            <div className="result_box" style={{display:resultDP}}>
                    <p>점수 : {score * 10}/100</p>
                    <button onClick={ e=>{
                        setScore(0);
                        setCount(0);
                        setAnswer('');
                        setGameDP('');
                        setResultDP('none');
                    }}>다시하기</button>
            </div>
        </div>
    )
}

export default Game;