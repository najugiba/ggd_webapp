import React, { useState } from 'react';
import '../CSSs/Game.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// ==========================랜덤 수 발생 함수======================================
let generateRandom = function (min, max) {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

let randnum1, randnum2;

const makeRandom = () => {
    randnum1 = generateRandom(2, 9);
    randnum2 = generateRandom(2, 9);
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
let RightAnswerListIndex = 0, WrongAnswerListIndex = 0;
const mapingRightAnswer = () => {
    RightAnswerList = RightAnswer.map(data => (
        <li style={{ listStyle: 'none', color: 'blue' }} key={RightAnswerListIndex++}>{data}</li>
    ))
}
const mapingWrongAnswer = () => {
    WrongAnswerList = WrongAnswer.map(data => (
        <li style={{ listStyle: 'none', color: 'red' }} key={WrongAnswerListIndex++}>{data}</li>
    ))
}



let score = 0;
const IncreaseScore = () => { score += 1; }
const ZeroScore = () => { score = 0; }




function Game() {
    const [answer, setAnswer] = useState('');
    // const [score, setScore] = useState(0);
    const [count, setCount] = useState(1);
    const [descDP, setDescDP] = useState('');
    const [gameDP, setGameDP] = useState('none');
    const [resultDP, setResultDP] = useState('none');
    const [startTimer, setStartTimer] = useState(0);
    const [open, setOpen] = useState(false);
    const [textcount, setTextcount] = useState(3);



    //==================== 타이머 관련 함수 =============================================
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
        countdonw();
    };

    const handleClose = () => {
        setOpen(false);
    };

    let t = 3;
    const countdonw = () => {
        const test = setInterval(() => {
            if (t === 1) {
                clearInterval(test);
                handleClose();
            }
            t -= 1;
            setTextcount(t);
        }, 1000);
    }













    return (
        <div>
            {/* 게임 시작을 누르는 div */}
            <div className="desc_box" style={{ display: descDP }}>
                <button onClick={e => {
                    setDescDP('none');
                    setGameDP('');
                    setResultDP('none');
                    makeRandom();
                    ZeroScore();
                    setStartTimer(1);
                    handleOpen();
                }}>시작하기</button>


            </div>
            {/* 게임 진행되는 div */}
            <div className="gugudan_box" style={{ display: gameDP }}>
                                                                        {/* ============타이머 모달창=============== */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            {textcount}
                        </div>
                    </Fade>
                </Modal>

                <p className="text" style={{ width: '100%' }}>{randnum1}</p>
                <p className="text" style={{ width: '100%' }}>
                    <span className="text" style={{ width: '100%' }}><span className="text" style={{ marginLeft: '0' }}>x</span> <span className="text">{randnum2}</span></span>
                </p>
                <input
                    type="text"
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {

                            if (Number(answer) === (randnum1 * randnum2)) {   //정답일때
                                setCount(count + 1);
                                console.log(`${score}에서 `);
                                //setScore(score + 1);
                                IncreaseScore();
                                console.log(`${score}로 증가`)
                                makeRandom();
                                setAnswer('');
                                RightAnswer.push(`${randnum1} x ${randnum2} = ${randnum1 * randnum2}`);
                                console.log(`정답, 현재 스코어 ${score}`);
                            }
                            else {                                          //오답일때
                                setCount(count + 1);
                                makeRandom();
                                setAnswer('');
                                WrongAnswer.push(`${randnum1} x ${randnum2} = ${e.target.value}`)
                                console.log("오답");
                            }
                            if (Number(count) === 10) {        // 모든 시험이 끝났을때
                                console.log(`맞음${score} 틀림:${count - score}`)
                                setGameDP('none');
                                setResultDP('');
                                gr.push(score);
                                localStorage.setItem("Totalscore", JSON.stringify(gr));
                                let today = new Date();
                                let year = today.getFullYear(); ty.push(year); localStorage.setItem("YearOfScore", JSON.stringify(ty));
                                let month = today.getMonth(); tm.push(month + 1); localStorage.setItem("MonthOfScore", JSON.stringify(tm)); //월은 +1 해줘야함
                                let date = today.getDate(); td.push(date); localStorage.setItem("DateOfScore", JSON.stringify(td));

                                console.log(localStorage.getItem("Totalscore"));
                                console.log(localStorage.getItem("YearOfScore"));
                                console.log(localStorage.getItem("MonthOfScore"));
                                console.log(localStorage.getItem("DateOfScore"));

                                mapingRightAnswer();
                                mapingWrongAnswer();
                                RightAnswer = [];
                                WrongAnswer = [];
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
            <div className="result_box" style={{ display: resultDP }}>
                <p>점수 : {score * 10}/100</p>

                <div>
                    {RightAnswerList}
                </div>
                <div>
                    {WrongAnswerList}
                </div>

                <button onClick={e => {
                    // setScore(0);
                    ZeroScore();
                    setCount(1);
                    setAnswer('');
                    setGameDP('');
                    setResultDP('none');
                    handleOpen();
                }}>다시하기</button>
            </div>
        </div>
    )
}

export default Game;