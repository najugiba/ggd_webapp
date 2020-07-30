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

var gr = [];
var ty = [];
var tm = []; //todaymonth 라는 경기 기록날짜의 월 을 담아놓을 배열
var td = []; //todaydate 라는 경기 기록날짜의 일 을 담아놓을 배열

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
                        <span className="text" style={{width:'100%'}}><span className="text" style={{marginLeft:'0'}}>x</span> <span className="text">{randnum2}</span></span>
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
                            if(Number(count) === 9){        // 모든 시험이 끝났을때
                                setGameDP('none');
                                setResultDP('');
                               // if(score != 0) setScore(score);
                                gr.push(score);
                                localStorage.setItem("Totalscore", JSON.stringify(gr));
                                let today = new Date();
                                let year = today.getFullYear(); ty.push(year); localStorage.setItem("YearOfScore", JSON.stringify(ty));
                                let month = today.getMonth(); tm.push(month+1); localStorage.setItem("MonthOfScore", JSON.stringify(tm)); //월은 +1 해줘야함
                                let date = today.getDate(); td.push(date); localStorage.setItem("DateOfScore", JSON.stringify(td));

                                console.log(localStorage.getItem("Totalscore"));
                                console.log(localStorage.getItem("YearOfScore"));
                                console.log(localStorage.getItem("MonthOfScore"));
                                console.log(localStorage.getItem("DateOfScore"));
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