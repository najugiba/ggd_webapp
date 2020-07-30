import React, {useState} from 'react';
import '../CSSs/Game.css';

// ==========================랜덤 수 발생 함수======================================
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



// ==============점수와 날짜를 localstorage에 담아두기 위한 배열들===================
var gr = [];
var ty = [];
var tm = []; 
var td = []; 



// ===================정답과 오답을 종료 후 보여 주기 위한 부분=======================
let RightAnswer = [];
let WrongAnswer = [];

let RightAnswerList, WrongAnswerList;
const mapingRightAnswer = () =>{
    RightAnswerList = RightAnswer.map(data=>(
        <li style={{listStyle:'none', color:'blue'}} key={data}>{data}</li>
    ))
}
const mapingWrongAnswer = () =>{
    WrongAnswerList = WrongAnswer.map(data=>(
        <li style={{listStyle:'none', color:'red'}} key={data}>{data}</li>
    ))
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
                        <span className="text" style={{width:'100%'}}><span className="text" style={{marginLeft:'0'}}>x</span> <span className="text">{randnum2}</span></span>
                    </p>
                <input 
                    type="text" 
                    value={answer} 
                    onChange={e=> setAnswer(e.target.value)}
                    onKeyPress={e=>{
                        if(e.key === 'Enter'){
                            if(Number(answer) === (randnum1 * randnum2)){   //정답일때
                                setCount(count + 1);
                                setScore(score + 1);
                                makeRandom();
                                setAnswer('');
                                RightAnswer.push(`${randnum1} x ${randnum2} = ${randnum1*randnum2}`);
                            }else{                                          //오답일때
                                setCount(count + 1);
                                makeRandom();
                                setAnswer('');
                                WrongAnswer.push(`${randnum1} x ${randnum2} = ${e.target.value}`)
                            }
                            if(Number(count) === 9){        // 모든 시험이 끝났을때
                                setGameDP('none');
                                setResultDP('');
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

                                mapingRightAnswer();
                                mapingWrongAnswer();
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

            {/* 시험 끝나면 display 될 곳 */}
            <div className="result_box" style={{display:resultDP}}>
                    <p>점수 : {score * 10}/100</p>
                    
                    <div>
                        {RightAnswerList}
                        {WrongAnswerList}
                    </div>
                    
                    <br/>
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