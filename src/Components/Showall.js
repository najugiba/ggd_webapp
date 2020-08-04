import React, { useState, useEffect } from 'react';
import "../CSSs/Showall.css";


let arr1=[], arr2=[], arr3=[], arr4=[];
// 맨처음 2단을 보여주기 위해 그냥 2단을 먼저 넣어놓는 부분=================================
    for (let j = 1; j <= 5; j++) {
        let result = 2 + " x " + j + " = " + 2 * j ;
        arr1 = [...arr1, result];
        result =  2 + " x " + j;
        arr2 = [...arr2, result];
    }
    for(let j=6; j<10; j++){
        let result = 2 + " x " + j + " = " + 2 * j ;
        arr3 = [...arr3, result];
        result =  2 + " x " + j;
        arr4 = [...arr4, result];
    }
    let index = 0;
    let temp1 = arr1.map((menu) => (
        <li className="showall_listitem" key={index++}>{menu}</li>) // key 중복 바꿔야함 !!=========================================
    );
    let temp2 = arr3.map((menu)=>(
        <li className="showall_listitem" key={index++}>{menu}</li>
    ))
    let temp3 = arr2.map((menu)=>(
        <li className="showall_listitem" key={index++}>{menu}</li>
    ))
    let temp4 = arr4.map((menu)=>(
        <li className="showall_listitem" key={index++}>{menu}</li>
    ))





function Showall() {
    //여기는 render 부분이라고 생각하면 된다.
    let unshow1 =[];
    let unshow2 =[];
    let answer = [];
    let answerB = [];
    const [a, setA] = useState(temp1);
    const [b, setB] = useState(temp2);
    const [uns1, setUns1] = useState(temp3);
    const [uns2, setUns2] = useState(temp4);
    const [dp1, setDp1] = useState('flex');  
    const [dp2, setDp2] = useState('none');


    
    


    function show(n) {
        let last;
        if (n < 10) last = 9;
        else last = n;
        for (let j = 1; j <= 5; j++) {
            let result = n + " x " + j + " = " + n * j ;
            answer = [...answer, result];
            result =  n + " x " + j;
            unshow1 = [...unshow1, result];
        }
        for(let j=6; j<10; j++){
            let result = n + " x " + j + " = " + n * j ;
            answerB = [...answerB, result];
            result =  n + " x " + j;
            unshow2 = [...unshow2, result];
        }
        let index = 0;
        const menuList = answer.map((menu) => (
            <li className="showall_listitem" key={index++}>{menu}</li>) // key 중복 바꿔야함 !!=========================================
        );
        const menuList2 = answerB.map((menu)=>(
            <li className="showall_listitem" key={index++}>{menu}</li>
        ))
        const unshowList1 = unshow1.map((menu)=>(
            <li className="showall_listitem" key={index++}>{menu}</li>
        ))
        const unshowList2 = unshow2.map((menu)=>(
            <li className="showall_listitem" key={index++}>{menu}</li>
        ))
        setA(menuList);
        setB(menuList2);
        setUns1(unshowList1);
        setUns2(unshowList2);
    }

    const btnClick = e => {
        show(e.target.id);
    }
    const modeClick1 = e =>{
        setDp1('flex');
        setDp2('none')
    }
    const modeClick2 = e =>{
        setDp1('none');
        setDp2('flex')
    }

    useEffect(()=>{
        console.log("D");
    })

    //InitialGugudan();
    return (
        <div className="Showall_Container">
            <div className="showmodebtn_box">
                <button className="showmode_btn" onClick={modeClick1}>답보기</button>
                <button className="showmode_btn" onClick={modeClick2}>답가리기</button>
            </div>
            
            <div className="ShowBox_BtnBox">
                {/* 구구단 표 보여줄 곳 */}
                <div className="show_Box" style={{display:dp1}}>
                    <ul className="Showall_list">  
                        {a}
                    </ul>
                    <ul className="Showall_list">
                        {b}
                    </ul>
                </div>
                <div className="show_Box" style={{display:dp2}}>
                    <ul className="Showall_list">
                        {uns1}
                    </ul>
                    <ul className="Showall_list">
                        {uns2}
                    </ul>
                </div>
                {/* 구구단 표 고르는 버튼들 */}
                <div className="dan_btn_Container">
                    <p className="OnTablet_text">연습할 구구단을 선택해주세요!</p>
                    <div style={{paddingLeft:'19px', paddingRight:'19px'}}>
                        <button className="dan_btn" id="2" onClick={btnClick}>2단</button>
                        <button className="dan_btn" id="3" onClick={btnClick}>3단</button>
                        <button className="dan_btn" id="4" onClick={btnClick}>4단</button>
                        <button className="dan_btn" id="5" onClick={btnClick}>5단</button>
                    </div>
                    <div style={{paddingLeft:'19px', paddingRight:'19px'}}>
                        <button className="dan_btn" id="6" onClick={btnClick}>6단</button>
                        <button className="dan_btn" id="7" onClick={btnClick}>7단</button>
                        <button className="dan_btn" id="8" onClick={btnClick}>8단</button>
                        <button className="dan_btn" id="9" onClick={btnClick}>9단</button>
                    </div>

                    <div className="OnTablet">
                        <button className="showmode_btn" onClick={modeClick1}>답보기</button>
                        <button className="showmode_btn" onClick={modeClick2}>답가리기</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Showall;