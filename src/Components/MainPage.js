import React from 'react';
import Navibar from '../Utils/Navibar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EasyTest from './EasyTest';
import HardTest from './HardTest';
import Showall from './Showall';
import Practice from './Practice';

/* 
메인페이지의 구성
    1. 두개의 div태그를 갖는다. (input창과 등록하기 버튼을 가진 화면 + 종류를 선택할 수 있는 화면)
*/



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
                   choiceDP : 'flex'
               })
           }
       }

        return(
            <div>
                
                <div className="register" style={{display:this.state.registerDP}}>
                    <input 
                        type="text" 
                        value={this.state.registerInput} 
                        onChange={e=>{this.setState({registerInput:e.target.value})}}>
                    </input>
                    <button onClick={CheckID}>
                        등록하기
                    </button>
                </div>
                
                <div className="choice" style={{display:this.state.choiceDP}}>
                    <Navibar name={this.state.registerInput}/>
                   {/* <p>{this.state.registerInput}님 어서오세요!</p>
                    <div style={{marginTop: '5vh'}}>
                        <Router>
                            <Link style={{display:'block'}} to="/showall">모든 구구단 보기</Link>
                            <Link style={{display:'block'}} to="/practice">연습하기</Link>
                            <Link style={{display:'block'}} to="/easytest">쉬운 시험보기</Link>
                            <Link style={{display:'block'}} to="/hardtest">어려운 시험보기</Link>

                            <div>
                                <Route path='/showall' component={Showall} />
                                <Route path='/practice' component={Practice} />
                                <Route path='/easytest' component={EasyTest} />
                                <Route path='/hardtest' component={HardTest} />
                            </div>
                        </Router>
                    </div>
                     */}
                </div>
                
            </div>
        );
    }
}


export default MainPage;