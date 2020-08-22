import React, { useState } from 'react';
import '../CSSs/Practice.css';
import Game_choice from '../Utils/Game_choice';

import { connect } from 'react-redux';
import { actionCreators } from '../store';
import store from '../store';


// 문제연습은 객관식
// 시험보기만 주관식
  
let ImgArr = ["monkey", "mice", "tiger", "rabbit"];
function Practice(props) {

    const {updateState} = props;
    const [dan, setDan] = useState();
    const [btnDP, setBtnDP] = useState('');
    const [gameDP, setGameDP] = useState('none');

    const danChoice = e => {
        setDan(e.target.id);
        alert(`${e.target.id}단을 연습합니다.`)
        setGameDP('');
        setBtnDP('none');
        updateState(props.UserPlusImageName.ImageIndex, props.UserPlusImageName.UserName, e.target.id);
    }

    console.log("practice 페이지");
    console.log(props.UserPlusImageName);

    return (
        <div className="Practice_Container">
            <div style={{ display: gameDP }}>
                <Game_choice dan={dan} />
            </div>

            <div style={{ display: btnDP }}>
                <div className="Practice_imgbox">
                    <img className="Practice_img" src={require(`../Images/${ImgArr[props.idx]}.png`)}></img>
                </div>
                <p className="Practice_text">연습하고자 하는 구구단을 선택하세요</p>
                <div className="Practice_Btn_Line" style={{paddingLeft:'20px', paddingRight:'5px'}}>
                    <button className="Practice_Btn" id="2" onClick={danChoice}>2단</button>
                    <button className="Practice_Btn" id="3" onClick={danChoice}>3단</button>
                    <button className="Practice_Btn" id="4" onClick={danChoice}>4단</button>
                    <button className="Practice_Btn" id="5" onClick={danChoice}>5단</button>
                </div>
                <div className="Practice_Btn_Line" style={{paddingLeft:'20px', paddingRight:'5px'}}>
                    <button className="Practice_Btn" id="6" onClick={danChoice}>6단</button>
                    <button className="Practice_Btn" id="7" onClick={danChoice}>7단</button>
                    <button className="Practice_Btn" id="8" onClick={danChoice}>8단</button>
                    <button className="Practice_Btn" id="9" onClick={danChoice}>9단</button>
                </div>
                <button className="Practice_Btn2" id="10" onClick={danChoice}>모두</button>

            </div>

            
        </div>
    )
}

//export default Practice;


/* Redux를 사용하는 컴포넌트에서의 역할

    1. mapStateToProps(state, ownProps) 를 만든다 (이는 Props로 state를 가져오겠다는 것)
    2. mapDispatchToProps(dispatch) 를 만든다 (이는 이 컴포넌트에서 state를 변경할 수 있게 해준다, 여기선 등록하는 일만 할 것이므로 addToDo만 return 된 것이다.);
    3. 컴포넌트와 앞서 만든 함수들을 connect해준다. connect는 컴포넌트에서 store에 접근할 수 있게 연결을 해주는 것이다.
*/


// Redux state로부터 home에 prop으로써 전달한다는 뜻.
function mapStateToProps(state, ownProps){
    return { UserPlusImageName : state };   //toDos에 state를 가져온다.
}

// reducer에 action을 알리는 함수 
function mapDispatchToProps(dispatch){
    return {
        updateState : (II, UN, dan) => dispatch(actionCreators.updateState(II,UN,dan))
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(Practice);