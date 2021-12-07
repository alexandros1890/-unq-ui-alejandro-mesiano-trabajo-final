
import React,{ useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import '../App.css';
import ladoB from '../ladoB.png';

const Ficha=(props)=>{

    let ficha=props.ficha;
    const[vuelta,setVuelta]=useState(true);

    const click=()=>{
        setVuelta(!vuelta);

    }

useEffect(()=>{
    click();
},[])

    return(
        <div onClick={click}>
            <ReactCardFlip isFlipped={vuelta}  >
                <div className="LadoB"><img width='100%' src={ladoB}/></div>
                <div className="LadoA"><h4>{ficha}</h4></div>
            </ReactCardFlip>
        </div>
    );

    

}

export default Ficha;