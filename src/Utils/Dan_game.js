// 구구단의 한 단만 연습할 수 있는 게임모드

import React, {useState} from 'react';


function Dan_game(props){
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [descDP, setDescDP] = useState('');
    const [gameDP, setGameDP] = useState('none');
    const [resultDP, setResultDP] = useState('none');

    const [oneTonine, setOneTonine] = useState(1);
    // 1- 단까지  곱해줄  수  +1씩증가

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
                <p className="text" style={{width:'100%'}}>{Number(props.dan)}</p>
                    <p className="text" style={{width:'100%'}}>
                        <span className="text" style={{width:'100%'}}><span className="text" style={{marginLeft:'0'}}>x</span> <span className="text">{oneTonine}</span></span>
                    </p>
                <input 
                    type="text" 
                    value={answer} 
                    onChange={e=> setAnswer(e.target.value)}
                    onKeyPress={e=>{
                        if(e.key === 'Enter'){
                            if(Number(answer) === (Number(props.dan) * oneTonine)){
                                alert("정답입니다");
                                setCount(count + 1);
                                setScore(score + 1);
                                setAnswer('');
                                setOneTonine(oneTonine + 1);
                            }else{
                                alert(`오답입니다. 정답: ${props.dan * oneTonine}`)
                                setCount(count + 1);
                                setAnswer('');
                                setOneTonine(oneTonine + 1);
                            }
                            if(Number(count) === 8){
                                setGameDP('none');
                                setResultDP('');
                            }
                        }
                    }
                    }
                >
                </input>
                <div>
                    문제 수 : {count}/9 
                </div>
                
            </div>

            <div className="result_box" style={{display:resultDP}}>
                    <p>점수 : {score}/9</p>
                    <button onClick={ e=>{
                        setScore(0);
                        setCount(0);
                        setAnswer('');
                        setGameDP('');
                        setResultDP('none');
                        setOneTonine(1);
                    }}>다시하기</button>

                    <button><a href="https://pyosoo.github.io/ggd_webapp/practice">돌아가기</a></button>
            </div>
        </div>
    )
}

export default Dan_game;
