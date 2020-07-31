import React from 'react'
import "../CSSs/Homepage.css";
import { useHistory } from "react-router-dom";

let userName = localStorage.getItem("Nickname");

function Homepage({history}){
    return(
        <div className="Homepage_Container">
            <div className="Homepage_ImgBox">
                이미지
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