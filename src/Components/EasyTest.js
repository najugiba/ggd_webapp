import React from 'react';
import Game from '../Utils/Game';

function EasyTest(props){
    return(
        <div>
            <Game Min="2" Max="9" idx={props.idx} />
        </div>
    )
}

export default EasyTest;