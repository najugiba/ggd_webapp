// 객관식 게임
// 객관식은 N단 x 1~9까지 차례대로 나온다.
import React, { useState } from 'react';
import "../CSSs/Game_choice.css";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { createHashHistory } from 'history'

import { useHistory } from "react-router-dom";
export const history = createHashHistory()
/* =========================== 랜덤수 필요시 활성화 할 것======================================
let generateRandom = function (min, max) {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}
*/
let randnum1, randnum2=1;
//randnum1 은 props로 받아온다.

//======================객관식 답 배열에서 랜덤으로 섞어서 만들기===============================
let answers = [];
const makeRandom = val => {
    if (Number(val) === 10) {   //만약 props로 받은 dan이 10이라면 모두를 선택한것.
        randnum1 = generateRandom(2,9);
        randnum2 = generateRandom(2,9); 
        let answerA = (randnum1 - 1) * randnum2;
        let answerB = randnum1 * (randnum2 - 1);
        let answerC = randnum1 * randnum2;
        let answerD = randnum1 * (randnum2 + 1);
        answers = [answerA, answerB, answerC, answerD];
        answers.sort(function () {
            return Math.random() - Math.random();
        });
    }
    else {
        let answerA = (randnum1 - 1) * randnum2;
        let answerB = randnum1 * (randnum2 - 1);
        let answerC = randnum1 * randnum2;
        let answerD = randnum1 * (randnum2 + 1);
        answers = [answerA, answerB, answerC, answerD];
        answers.sort(function () {
            return Math.random() - Math.random();
        });
    }
}
let generateRandom = function (min, max) {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}
// ==================== 게임끝날을때 결과 알려줄 팝업창 실행 함수 ===============================
const EndOfGame = () => {
    alert("게임끝났엉");
    randnum2 = 1;
}

// ===================== 게임 종료시 모달 창 ==========================================
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 260,
        height: 270,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};



let O = 0;
let X = 0;

// ========================= 답 클릭 했을시 정답과 오답을 보여줄 타이밍 함수 ============================

let tempDP;
const Term = () => {
    let t = 1;
    let rightidx = 0;
    const test = setInterval(() => {
        for(let i=0; i<4; i++){
            if(answers[i] === Number(randnum2 * randnum1)){
                rightidx = i;
            }
        }
        //여기서 정답은 주황색처리해주고
        if (t === 0) {
            clearInterval(test);
            //여기서 다시 원래대로 돌아오고
        }
        t -= 1;
    }, 500);
}

function Game_choice(props) {
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [descDP, setDescDP] = useState('');
    const [gameDP, setGameDP] = useState('inline-block');
    const [resultDP, setResultDP] = useState('none');
    const [TabletChoiceBoxDP, setTCBD] = useState('');
    randnum1 = props.dan;
    if(props.dan !== "10") randnum2 = count+1;
    // 모달 위한 함수들
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //==================
    const check = e => {
        if (Number(e.target.id) === (randnum1 * randnum2)) {
            setCount(count + 1);
            setScore(score + 1);
            makeRandom(props.dan);
            setAnswer('');
            randnum2++;
            O++;
        }
        else {  //오답일시
            setCount(count + 1);
            makeRandom(props.dan);
            setAnswer('');
            randnum2++;
            X++;
        }
        if (count === 9) {      // 게임 끝날때 동작해야 할 코드들
            setGameDP('none');
            setResultDP('');
            EndOfGame();
            handleOpen();
            setTCBD('none');
            randnum2 = 1;
        }
    }
   
    makeRandom(props.dan);
    
    let history = useHistory();
    const goHome = () =>{
        history.push("/");
    }
    return (
        <div className="Game_choice_Container">
            <div className="GH_gugudan_box" style={{ display: gameDP }}>
                <div className="Problem_numberBox">문제 {count + 1}</div>
                <p className="text" style={{ width: '100%' }}>　　　{randnum1}</p>
                <p className="text" style={{ width: '100%' }}>
                    <span className="text" style={{ width: '100%' }}>
                        <span className="text">X　　</span> <span className="text text2">{randnum2}</span>
                    </span>
                </p>
                <div className="cutline"></div>
                {/* 객관식 답 누를 수 있는 버튼 */}
                <div className="OnMobile_ChoiceBox" >
                    <div className="Choice_Line">
                        <button className="Answer_Btn" id={answers[0]} onClick={check}>{answers[0]}</button>
                        <button className="Answer_Btn" id={answers[1]} onClick={check}>{answers[1]}</button>
                    </div>
                    <div className="Choice_Line">
                        <button className="Answer_Btn" id={answers[2]} onClick={check}>{answers[2]}</button>
                        <button className="Answer_Btn" id={answers[3]} onClick={check}>{answers[3]}</button>
                    </div>
                </div>
                <div className="OnTablet_AnswerBox">
                </div>
            </div>

            <div className="OnTablet_ChoiceBox" style={{display:TabletChoiceBoxDP}}>
                <p className="OnTablet_text">다음 중에 알맞은 답을 고르세요</p>
                <div className="Choice_Line">
                    <button className="Answer_Btn" id={answers[0]} onClick={check}>{answers[0]}</button>
                    <button className="Answer_Btn" id={answers[1]} onClick={check}>{answers[1]}</button>
                </div>
                <div className="Choice_Line">
                    <button className="Answer_Btn" id={answers[2]} onClick={check}>{answers[2]}</button>
                    <button className="Answer_Btn" id={answers[3]} onClick={check}>{answers[3]}</button>
                </div>
            </div>


            <div className="result_box" style={{ display: resultDP }}>
                <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
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
                            <p className="Result_text">맞힌 문항 수 : 　<span className="Result_text2">{O}</span></p>
                            <p className="Result_text">틀린 문항 수 : 　<span className="Result_text2">{X}</span></p>
                            <button className="Result_Btn Result_Btn1" onClick={e => {
                                setScore(0);
                                setCount(0);
                                setAnswer('');
                                setGameDP('inline-block');
                                setResultDP('none');
                                randnum2 = 1;
                                if(window.innerWidth > 360){
                                    setTCBD('inline-block');
                                }
                                handleClose();
                                O = 0;
                                X = 0;
                            }}>다시하기</button>
                            <button className="Result_Btn" onClick={() => {
                                setScore(0);
                                setCount(0);
                                setAnswer('');
                                randnum2 = 1;
                                O = 0;
                                X = 0;
                                handleClose();
                                goHome(); 
                            }}>홈으로 가기
                            </button>
                        </div>
                    </Fade>
                </Modal>

            </div>
        </div>
    )
}

export default Game_choice;