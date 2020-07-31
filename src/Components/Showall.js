import React, { useState } from 'react';
import "../CSSs/Showall.css";

function Showall() {
    //여기는 render 부분이라고 생각하면 된다.
    let unshow1 =[];
    let unshow2 =[];
    let answer = [];
    let answerB = [];
    const [a, setA] = useState();
    const [b, setB] = useState();
    const [uns1, setUns1] = useState();
    const [uns2, setUns2] = useState();
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
            <li className="showall_listiem" key={index++}>{menu}</li>
        ))
        const unshowList2 = unshow2.map((menu)=>(
            <li className="showall_listiem" key={index++}>{menu}</li>
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

    return (
        <div className="Showall_Container">
            <div className="showmodebtn_box">
                <button className="showmode_btn" onClick={modeClick1}>답보기</button>
                <button className="showmode_btn" onClick={modeClick2}>답가리기</button>
            </div>
            
            <div>
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
                <div>
                    <button className="dan_btn" id="2" onClick={btnClick}>2단</button>
                    <button className="dan_btn" id="3" onClick={btnClick}>3단</button>
                    <button className="dan_btn" id="4" onClick={btnClick}>4단</button>
                    <button className="dan_btn" id="5" onClick={btnClick}>5단</button>
                </div>
                <div>
                    <button className="dan_btn" id="6" onClick={btnClick}>6단</button>
                    <button className="dan_btn" id="7" onClick={btnClick}>7단</button>
                    <button className="dan_btn" id="8" onClick={btnClick}>8단</button>
                    <button className="dan_btn" id="9" onClick={btnClick}>9단</button>
                </div>
                

            </div>
            
        </div>
    )
}

export default Showall;