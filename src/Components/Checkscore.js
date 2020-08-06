import React, { useEffect, useState } from 'react';
import "../CSSs/Checkscore.css";
    
let score_arr = [];
    const GetScore = () => {
        score_arr = [];
        let s = localStorage.getItem("Totalscore"); let scores = JSON.parse(s);
        let y = localStorage.getItem("YearOfScore"); let years = JSON.parse(y);
        let m = localStorage.getItem("MonthOfScore"); let months = JSON.parse(m);
        let d = localStorage.getItem("DateOfScore"); let dates = JSON.parse(d);
    
    
        console.log(scores);
        console.log(years);
        console.log(months);
        console.log(dates);
    
        let result = [];
        let last_index = 0;
        if(scores.length > 5) last_index = scores.length - 5;
        else if(scores.length <= 5) last_index = 0;
        for(let i=scores.length-1; i>=last_index; i--){
            let chat;
            if(scores[i] == 10) chat = "　훌륭해!";
            else if(scores[i] >= 9) chat = "　　훌륭해!";
            else if(scores[i] >=6) chat = "　　좋아요!";
            else if(scores[i] == 0) chat ="　　　 분발해!";
            else chat = "　　분발해!";
            let temp = years[i] + "." + months[i] + "." + dates[i]+"　　"+ scores[i]*10;
            result = [...result, temp];
            score_arr = [...score_arr, scores[i]];
        }
        console.log(result);
        return result;
    }
    let ForKeyUnique = 0;



function Checkscore(){

    const [arr, setArr] = useState(GetScore());
    let index = 0;
    const list = arr.map(data => (
        <li className="Check_listitem" style={{listStyle:'none'}} key={ForKeyUnique++}>{data}</li>
    ))
    const barlist = score_arr.map(data=>(
        <div className={'H'+score_arr[index++]*10 + " bar"}></div>
    ))

    return(
        <div>
            <div className="wrapper">
               {barlist}
            </div>
            <div className="wrapper2">
                <p className="Score_Desc">
                    <span className="Desc_date">날짜</span>
                    <span className="Desc_score">점수</span>
                    <span className="Desc_level">수준</span>
                </p>
                <div className="Score_table">
                    {list}
                </div>  
            </div>
           
        </div>
    )
}

export default Checkscore;