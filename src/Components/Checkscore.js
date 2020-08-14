import React, { useEffect, useState } from 'react';
import "../CSSs/Checkscore.css";
import bad from '../Images/bad.png';
import good from '../Images/good.png';
import great from '../Images/great.png';
    
let score_arr = [];
let EXIST;

let ImgArr = ["monkey", "mice", "tiger", "rabbit"];
let scoreImgArr =["bad", "good", "great"];
let selectimg = 0;
let imgindexbox = [];
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
    
        imgindexbox = [];
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
                if(scores[i] == 10) selectimg = 2;
                else if(scores[i] >= 9) selectimg = 2;
                else if(scores[i] >=6) selectimg = 1;
                else if(scores[i] == 0) selectimg = 0;
                else selectimg = 0;

                let temp = + years[i] + "." + months[i] + "." + dates[i]+"　"+ hours[i] +":" + boons[i]+    "　　　"+ scores[i]*10+"점" ;
                result = [...result, temp];
                score_arr = [scores[i], ...score_arr];
                imgindexbox = [...imgindexbox, selectimg];
            }
           // console.log(result);
            return result;
        }

        
    }
    let ForKeyUnique = 0;



function Checkscore(props){
    const [arr, setArr] = useState(GetScore());
    let list;
    let barlist;
    let d1,d2;
    if(EXIST === true){
        d1 = "none";
        d2 = "inline-block";
        let index = 0;
        // 점수 결과 알려줄 list
        list = arr.map(data => (
            <li className="Check_listitem" style={{listStyle:'none'}} key={ForKeyUnique++}>
                {data} 
                <img className="score_level_img" src={require(`../Images/${scoreImgArr[imgindexbox[index++]]}.png`)} 
                />
            </li>
        ))
        index = 0;
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
                <img className="checkscore_img" src={require(`../Images/${ImgArr[props.idx]}.png`)} />
                <p className="no_score_text">시험을 보고</p>
                <p className="no_score_text">다시 성적을 확인해주세요.</p>
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