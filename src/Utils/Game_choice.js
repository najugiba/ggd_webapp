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
export const history = createHashHistory()
/* =========================== 랜덤수 필요시 활성화 할 것======================================
let generateRandom = function (min, max) {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}
*/
let randnum1, randnum2;
randnum2 = 1;
//randnum1 은 props로 받아온다.

//======================객관식 답 배열에서 랜덤으로 섞어서 만들기===============================
let answers = [];
const makeRandom = () => {

    let answerA = (randnum1 - 1) * randnum2;
    let answerB = randnum1 * (randnum2 - 1);
    let answerC = randnum1 * randnum2;
    let answerD = randnum1 * (randnum2 + 1);
    answers = [answerA, answerB, answerC, answerD];
    answers.sort(function () {
        return Math.random() - Math.random();
    });
}

// ==================== 게임끝날을때 결과 알려줄 팝업창 실행 함수 ===============================
const EndOfGame = () =>{
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
        width: 300,
        height: 350,
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


function Game_choice(props, {history}) {
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [descDP, setDescDP] = useState('');
    const [gameDP, setGameDP] = useState('');
    const [resultDP, setResultDP] = useState('none');
    randnum1 = props.dan;

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
            makeRandom();
            setAnswer('');
            randnum2++;
            O++;
        }
        else {
            setCount(count + 1);
            makeRandom();
            setAnswer('');
            randnum2++;
            X++;
        }
        if (count === 9) {      // 게임 끝날때 동작해야 할 코드들
            setGameDP('none');
            setResultDP('');
            EndOfGame();
            handleOpen();
        }
    }

    const onStart = () => {
        setDescDP('none');
        setGameDP('');
        setResultDP('none');
        makeRandom();
    }
    makeRandom();

    return (
        <div className="Game_choice_Container">

            <div className="gugudan_box" style={{ display: gameDP }}>
                <div>(문제 {count+1})</div>
                <p className="text" style={{ width: '100%' }}>　　　{randnum1}</p>
                <p className="text" style={{ width: '100%' }}>
                    <span className="text" style={{ width: '100%' }}>
                        <span className="text">X　　</span> <span className="text">{randnum2}</span>
                    </span>
                </p>

                {/* 객관식 답 누를 수 있는 버튼 */}
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
                            맞은 갯수 : {O} <br/>
                            틀린 갯수 : {X} <br/>
                            <button onClick={e => {
                                setScore(0);
                                setCount(0);
                                setAnswer('');
                                setGameDP('');
                                setResultDP('none');
                                randnum2 = 1;
                                handleClose();
                            }}>다시하기</button>
                            <button onClick={()=>{
                                handleClose();
                            }}>그만하기
                            </button>
                        </div>
                    </Fade>
                </Modal>
                
            </div>
        </div>
    )
}

export default Game_choice;