import React,{useState, useEffect} from "react";
import Ficha from "./Ficha";
import Juego from "./Juego";



const Tablero=(props)=>{
     let list=props.list;
     const[fuera,setFuera]=useState(false);
     let descubiertas=[];
     let encontradas=Juego.encontradas();
     const [emergente, setEmergente]=useState(false)




    const elegir=(ficha)=>{

        descubiertas.push(ficha)
  
        if(descubiertas.length==2){
            if(descubiertas[0].imagen==descubiertas[1].imagen && descubiertas[0].numero!=descubiertas[1].numero){

                Juego.encontrar(descubiertas[0].numero);
                Juego.encontrar(descubiertas[1].numero);
                setTimeout(finDelJuego(),600) 
             
            }else{             
                setFuera(true)
            }
            descubiertas=[];
        }


    }


    const finDelJuego=()=>{
        if(encontradas.length>14){
          setEmergente(true)
        }
        
      }
    
     
    useEffect(() => {
  
    }, [descubiertas]);

    

  



    return(
        <>
        <div>
            {emergente && <div className='emergente'  with='300px'> <div className='emergente'><h3>Fin del Juego</h3></div> <div><h4>Pulse <i>RESET</i> para continuar</h4></div> </div>}
        </div>
        <div className="App-container">
            {list.map(e=><Ficha ficha={e} elegir={elegir} encontradas={encontradas} fuera={fuera} descubiertas={descubiertas} setFuera={setFuera}/>)}
        </div>
        </>
    )

}

export default Tablero;