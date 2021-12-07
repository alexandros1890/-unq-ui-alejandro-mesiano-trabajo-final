import React from "react";
import Ficha from "./Ficha";



const Tablero=(props)=>{
    let list=props.list;

    return(
        <div className="App-container">
            {list.map(e=><Ficha ficha={e}/>)}
        </div>
    )

}

export default Tablero;