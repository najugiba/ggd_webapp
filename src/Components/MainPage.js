import React from 'react';
import Navibar from '../Utils/Navibar';
import "../CSSs/MainPage.css";
import Navibar2 from '../Utils/Navibar2';
import monkey from '../Images/monkey.png';
import mice from '../Images/mice.png';
import rabbit from '../Images/rabbit.png';
import tiger from '../Images/tiger.png';
import { Button } from '@material-ui/core';
import leftArrow from '../Images/leftArrow.png';
import rightArrow from '../Images/rightArrow.png';
import { connect } from 'react-redux';
/* 
메인페이지의 구성
    1. 두개의 div태그를 갖는다. (input창과 등록하기 버튼을 가진 화면 + 종류를 선택할 수 있는 화면)
    2. 루트의 가장 최고 노드이다 (App제외)
*/





let currentIdx = 0;
function alreadyPlayer() {
    let username = localStorage.getItem("Nickname");
    if (username != null) {
        //console.log("있다이미");
    }
}
alreadyPlayer();
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerInput: '',
            registerDP: '',
            choiceDP: 'none',
            CurrentImgIndex : 0
        }
    }

    render() {


        let ImgArr = ["monkey", "mice", "tiger", "rabbit"];
        const CheckID = () => {
            if (this.state.registerInput === '') {
                alert("닉네임을 설정해주세요!");
            } else {
                this.setState({
                    registerDP: 'none',
                    choiceDP: 'grid'
                })
                localStorage.setItem("Nickname", this.state.registerInput);
            }
        }



        return (
            <div>
                <div className="register" style={{ display: this.state.registerDP }}>
                    <div className="Main_ImgBox" >
                        <div className="forVertical">
                            <img className="changeImg changeImgLeft" onClick={()=>{
                                if(currentIdx === 0){
                                    this.setState({CurrentImgIndex: 3});
                                    currentIdx = 3;
                                } 
                                else{
                                    this.setState({
                                        CurrentImgIndex: this.state.CurrentImgIndex - 1
                                    })
                                    currentIdx -= 1;
                                } 
                            }} src={require('../Images/leftArrow.png')} />
                        </div>
                        <img className="Mainpage_img" src={require(`../Images/${ImgArr[this.state.CurrentImgIndex]}.png`) } />
                        <div className="forVertical">
                            <img className="changeImg changeImgRight" onClick={()=>{
                                if(currentIdx === 3){
                                    this.setState({CurrentImgIndex: 0});
                                    currentIdx = 0;
                                }
                                else{
                                    this.setState({
                                        CurrentImgIndex: this.state.CurrentImgIndex + 1
                                    })
                                    currentIdx += 1;
                                } 
                            }} src={require(`../Images/rightArrow.png`)} />
                        </div>
                    </div>
                    <p className="Mainpage_text">캐릭터를 선택해주세요.</p>
                    <input
                        className="Main_InputBox"
                        type="text"
                        value={this.state.registerInput}
                        placeholder="이름을 입력해주세요."
                        onChange={e => { 
                            this.setState({ registerInput: e.target.value });
                             }}>

                    </input>
                    <button className="Main_registerBtn" onClick={CheckID}>
                        등록하기
                    </button>
                </div>

                <div className="choice" style={{ display: this.state.choiceDP }}>
                    {/* <Navibar name={this.state.registerInput}/> */}
                    <Navibar2 name={this.state.registerInput} imgidx={currentIdx} />
                </div>

            </div>
        );
    }
}


export default MainPage;