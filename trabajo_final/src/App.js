import Tablero from './components/Tablero';
import Fichas  from "./components/Fichas";
import './App.css';
// import {useNavigate} from 'react-router-dom';
import { useState } from 'react';


function App() {

  const list= Fichas.Fichas();
  const [numero,setNumero]=useState(0);


  const resetear=()=>{
    

  }

  return (
    <div className="App">
      <h1>MEMOTEK</h1>
      <button onClick={resetear}>Reset</button>
      <Tablero list={list}/>
    </div>
  );
}

export default App;
