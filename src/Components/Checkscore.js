import React, { useEffect, useState } from 'react';
import "../CSSs/Checkscore.css";
    
    const GetScore = () => {
        let s = localStorage.getItem("Totalscore"); let scores = JSON.parse(s);
        let y = localStorage.getItem("YearOfScore"); let years = JSON.parse(y);
        let m = localStorage.getItem("MonthOfScore"); let months = JSON.parse(m);
        let d = localStorage.getItem("DateOfScore"); let dates = JSON.parse(d);
    
    
        console.log(scores);
        console.log(years);
        console.log(months);
        console.log(dates);
    
        let result = [];
        for(let i=0; i<scores.length; i++){
            let chat;
            if(scores[i] >= 9) chat = "훌륭해요!";
            else if(scores[i] >=6) chat = "좋아요!";
            else chat = "분발해요!";
            let temp = years[i] + "." + months[i] + "." + dates[i] + "　　　　" + scores[i]*10 + "점　　　　" + chat;
            result = [...result, temp]
        }
        console.log(result);
        return result;
    }
function Checkscore(){

    const [arr, setArr] = useState(GetScore());

    const list = arr.map(data => (
        <li key={data}>{data}</li>
    ))

    return(
        <div>
            <div className="Checkscore_graphBox">
                이미지
            </div>
            <div className="Score_table">
                {list}
            </div>
        </div>
    )
}

export default Checkscore;