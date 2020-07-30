import React from 'react';
import Navibar from '../Utils/Navibar';
import "../CSSs/MainPage.css";
/* 
메인페이지의 구성
    1. 두개의 div태그를 갖는다. (input창과 등록하기 버튼을 가진 화면 + 종류를 선택할 수 있는 화면)
*/

function alreadyPlayer(){
    let username = localStorage.getItem("Nickname");
    if(username != null){
        console.log("있다이미");
    }
}
alreadyPlayer();
class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            registerInput : '',
            registerDP : '',
            choiceDP : 'none'
        }
    }
   
    render(){

       const CheckID = () => {
           if(this.state.registerInput === ''){
               alert("닉네임을 설정해주세요!");
           }else{
               this.setState({
                   registerDP : 'none',
                   choiceDP : 'grid'
               })
               localStorage.setItem("Nickname", this.state.registerInput);
           }
       }



        return(
            <div>
                <div className="register" style={{display:this.state.registerDP}}>
                    <div className="Main_ImgBox">이미지</div>
                    <input 
                        className="Main_InputBox"
                        type="text" 
                        value={this.state.registerInput} 
                        onChange={e=>{this.setState({registerInput:e.target.value})}}>

                    </input>
                    <button className="Main_registerBtn" onClick={CheckID}>
                        등록하기
                    </button>
                </div>
                
                <div className="choice" style={{display:this.state.choiceDP}}>
                    <Navibar name={this.state.registerInput}/>
                </div>
                
            </div>
        );
    }
}


export default MainPage;