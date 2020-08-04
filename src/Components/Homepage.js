import React, { useState } from 'react'
import "../CSSs/Homepage.css";
import { useHistory } from "react-router-dom";

let ImgArr = ["monkey", "mice", "tiger", "rabbit"];
function Homepage(props){

    const [currentUserName, setCurrentUserName] = useState('');
    let userName = localStorage.getItem("Nickname");
    let history = useHistory();
    console.log(props);
    console.log(`여기는 Homepage 이고 Navibar2로 부터 받은 이미지 index = ${props.idx}`);

    let ImgArr = ["monkey", "mice", "tiger", "rabbit"];


    return(
        <div className="Homepage_Container">
            <div className="Homepage_ImgBox">
                <img className="Homepage_img" src={require(`../Images/${ImgArr[props.idx]}.png`)}></img>
            </div>
            <div className="Homepage_BtnBox">
                <button className="Homepage_Btn" id="1" type="button" onClick={()=> history.push("/showall")}>구구단 표</button>
                <button className="Homepage_Btn" id="2" type="button" onClick={()=> history.push("/practice")}>연습 하기</button>
                <button className="Homepage_Btn" id="3" type="button" onClick={()=> history.push("/easytest")}>시험 보기</button>
                <button className="Homepage_Btn" id="4" type="button" onClick={()=> history.push("/checkscore")}>{userName}의 성적 확인하기</button>
            </div>
            
        </div>
    )
}

export default Homepage;  