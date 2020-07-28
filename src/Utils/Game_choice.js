import React, { useState } from 'react';
import '../CSSs/Game.css';

let generateRandom = function (min, max) {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

let randnum1, randnum2;
randnum1 = generateRandom(2, 9);
randnum2 = generateRandom(2, 9);

//객관식 답 배열
let answers = [];
const makeRandom = () => {
    randnum1 = generateRandom(2, 9);
    randnum2 = generateRandom(2, 9);

    //객관식 답
    let answerA = (randnum1 - 1) * randnum2;
    let answerB = randnum1 * (randnum2 - 1);
    let answerC = randnum1 * randnum2;
    let answerD = randnum1 * (randnum2 + 1);
    answers = [answerA, answerB, answerC, answerD];
    answers.sort(function () {
        return Math.random() - Math.random();
    });
}

function Game_choice() {
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [descDP, setDescDP] = useState('');
    const [gameDP, setGameDP] = useState('none');
    const [resultDP, setResultDP] = useState('none');


    const check = e => {
        if (Number(e.target.id) === randnum1 * randnum2) {
            setCount(count + 1);
            setScore(score + 1);
            makeRandom();
            setAnswer('');
        }
        else {
            setCount(count + 1);
            makeRandom();
            setAnswer('');
        }
        if (count === 9) {
            setGameDP('none');
            setResultDP('');
        }
    }

    return (
        <div>
            <div className="desc_box" style={{ display: descDP }}>
                <button onClick={e => {
                    setDescDP('none');
                    setGameDP('');
                    setResultDP('none');
                    makeRandom();
                }}>시작하기</button>
            </div>

            <div className="gugudan_box" style={{ display: gameDP }}>
                <p className="text" style={{ width: '100%' }}>{randnum1}</p>
                <p className="text" style={{ width: '100%' }}>
                    <span className="text" style={{ width: '100%' }}>
                        <span className="text">x</span> <span className="text">{randnum2}</span>
                    </span>
                </p>

                {/* 객관식 답 누를 수 있는 버튼 */}
                <button id={answers[0]} onClick={check}>{answers[0]}</button>
                <button id={answers[1]} onClick={check}>{answers[1]}</button>
                <button id={answers[2]} onClick={check}>{answers[2]}</button>
                <button id={answers[3]} onClick={check}>{answers[3]}</button>


                <div>
                    문제 수 : {count}/10
                </div>

            </div>

            <div className="result_box" style={{ display: resultDP }}>
                <p>점수 : {score * 10}/100</p>
                <button onClick={e => {
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

export default Game_choice;