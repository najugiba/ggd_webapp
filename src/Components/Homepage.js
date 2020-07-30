import React from 'react'
import "../CSSs/Homepage.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Showall from './Showall';

let userName = localStorage.getItem("Nickname");

function Homepage(props){
    return(
        <div className="Homepage_Container">
            <div className="Homepage_ImgBox">
                이미지
            </div>
            <div className="Homepage_BtnBox">
                <Router>
                    <Link className="Homepage_Btn" to="/showall">구구단 표</Link>
                    <Link className="Homepage_Btn" to="/practice">문제 연습</Link>
                    <Link className="Homepage_Btn" to="/easytest">시험 보기</Link>
                    <Link className="Homepage_Btn" to="/checkscore">점수 확인</Link>
                    <Route path="/showall" component={Showall} />
                </Router>
            </div>
            
        </div>
    )
}

export default Homepage;