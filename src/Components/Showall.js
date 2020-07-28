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
            let result = n + "x" + j + "=" + n * j + "";
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
                <div>
                    <button className="dan_btn" id="10" onClick={btnClick}>10단</button>
                    <button className="dan_btn" id="11" onClick={btnClick}>11단</button>
                    <button className="dan_btn" id="12" onClick={btnClick}>12단</button>
                    <button className="dan_btn" id="13" onClick={btnClick}>13단</button>
                </div>
                <div>
                    <button className="dan_btn" id="14" onClick={btnClick}>14단</button>
                    <button className="dan_btn" id="15" onClick={btnClick}>15단</button>
                    <button className="dan_btn" id="16" onClick={btnClick}>16단</button>
                    <button className="dan_btn" id="17" onClick={btnClick}>17단</button>
                </div>
                <div>
                    <button className="dan_btn" id="18" onClick={btnClick}>18단</button>
                    <button className="dan_btn" id="19" onClick={btnClick}>19단</button>
                </div>

            </div>
            <div>
                <ul>
                    {a}
                </ul>
            </div>
        </div>
    )
}

export default Showall;