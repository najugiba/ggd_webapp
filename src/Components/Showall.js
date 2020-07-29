import React, { useState } from 'react';
import "../CSSs/Showall.css";

function Showall() {
    //여기는 render 부분이라고 생각하면 된다.
    let answer = [];
    const [a, setA] = useState();

    function show(n) {
        let last;
        if (n < 10) last = 9;
        else last = n;
        for (let j = 1; j <= last; j++) {
            let result = n + " x " + j + " = " + n * j ;
            answer = [...answer, result];
        }
        let index = 0;
        const menuList = answer.map((menu) => (
            <li key={index++}>{menu}</li>)
        );
        setA(menuList);
    }

    const btnClick = e => {
        show(e.target.id);
    }


    return (
        <div className="Showall_Container">
            <p>모든 구구단표 보기</p>
            <div>
                {/* 구구단 표 보여줄 곳 */}
                <div>
                    <ul className="Showall_list">
                        {a}
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