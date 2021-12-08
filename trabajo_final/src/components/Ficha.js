
import React,{ useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import '../App.css';
import ladoB from '../ladoB.png';

const Ficha=(props)=>{

    const[girar,setGirar]=useState(true);
    const ficha=props.ficha;
    const elegir=props.elegir;
    const encontradas = props.encontradas;
    let descubiertas=props.descubiertas;
    const fuera=props.fuera;
    const setFuera=props.setFuera;
    

  

  
    const rotar=()=>{
      
      
        if(!encontradas.includes(ficha.numero)){
            setGirar(!girar);
        }
        
    }

    const noSonIgualesGirar=()=>{
        setFuera(false)
    }
    const volverATapar=()=>{
      
        if(encontradas.includes(ficha.numero)){
            setGirar(false);
        }        

        if(fuera && girar==false){
            setTimeout(rotar,700);
             noSonIgualesGirar()
        }
    }

    const click=()=>{
      if(!descubiertas.includes(ficha)&&!encontradas.includes(ficha.numero)){
            rotar();
            elegir(ficha);
      }  
    

    }

useEffect(()=>{
    volverATapar()
    
},[fuera,descubiertas, encontradas])

    return(
        <div onClick={click}>
            <ReactCardFlip isFlipped={girar}  >
                <div className="LadoA"><p className='imagen' >{ficha.imagen}</p></div>
                <div className="LadoB"><img width='100%' src={ladoB}/></div>
            </ReactCardFlip>
        </div>
    );

    

}

export default Ficha;