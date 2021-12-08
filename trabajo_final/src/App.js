import Tablero from './components/Tablero';
import Fichas  from "./components/Fichas";
import './App.css';





function App() {

  const list= Fichas.Fichas();

  const resetear=()=>{
    window.location.reload()
  }


  return (
    <div className="App">
      <h1>MEMOTEK</h1>
      <Tablero list={list}/>
       <button className='button' onClick={resetear}>RESET</button>
    </div>
  );
}

export default App;
