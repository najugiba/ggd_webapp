import React, { useEffect, useState } from 'react';
import "../CSSs/Checkscore.css";
    
let score_arr = [];
let EXIST;

    const GetScore = () => {
        score_arr = [];
        let s = localStorage.getItem("Totalscore"); let scores = JSON.parse(s);
        let y = localStorage.getItem("YearOfScore"); let years = JSON.parse(y);
        let m = localStorage.getItem("MonthOfScore"); let months = JSON.parse(m);
        let h = localStorage.getItem("HourOfScore"); let hours = JSON.parse(h);
        let b = localStorage.getItem("BoonOfScore"); let boons = JSON.parse(b);

        let d = localStorage.getItem("DateOfScore"); let dates = JSON.parse(d);
        
    
      //  console.log(scores);
     //   console.log(years);
     //   console.log(months);
     //   console.log(dates);
    
        // 데이터의 유무 판단하기
        if(scores === null){
            //console.log("데이터없음");
            EXIST = false;
        }
        else{
            EXIST = true;
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
                let temp = years[i] + "." + months[i] + "." + dates[i]+"　"+ hours[i] +":" + boons[i]+    "　　　"+ scores[i]*10+"점";
                result = [...result, temp];
                score_arr = [scores[i], ...score_arr];
            }
           // console.log(result);
            return result;
        }

        
    }
    let ForKeyUnique = 0;



function Checkscore(){
    const [arr, setArr] = useState(GetScore());
    let list;
    let barlist;
    let d1,d2;
    if(EXIST === true){
        d1 = "none";
        d2 = "inline-block";
        let index = 0;
        list = arr.map(data => (
            <li className="Check_listitem" style={{listStyle:'none'}} key={ForKeyUnique++}>{data}</li>
        ))
        barlist = score_arr.map(data=>(
            <div className={'H'+score_arr[index++]*10 + " bar"}></div>
        ))
    }
    else{
        d1 = "block";
        d2 = "none";
    }

    return(
        <div className="total_container">
            <div style={{display:d1}}>
                성적이 없습니다.
            </div>
            <div className="score_DP" style={{display:d2}}>
                <div className="percent-indicator" >
                    <div className="per-0"></div>
                    <div className="per-20"></div>
                    <div className="per-40"></div>
                    <div className="per-60"></div>
                    <div className="per-80"></div>
                    <div className="per-100"></div>
                </div>
                <div className="wrapper">
                    {barlist}
                </div>
                
                <div className="wrapper2">
                    <p className="Score_Desc">
                        <span className="Desc_date">날짜/시간/점수</span>
                    </p>
                    <div className="Score_table">
                        {list}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Checkscore;