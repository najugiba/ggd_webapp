import React, { useEffect } from 'react';
import GameChoice from '../Utils/Game_choice';

function HardTest(){

    let a;
    const Timer = () => {
        a = setInterval(()=>{
            console.log("TicTok")
        },1000)
    }

    const Stop = () => {
        clearInterval(a);
    }
    useEffect(()=>{
        //여기서 Timer를 실행하고
        Timer();

        //여기서 Timer를 해제하면 될거같은데
        return ()=>{
            Stop();
        }
    })

    return(
        <div>
            HardTest
        </div>
    )
}

export default HardTest;