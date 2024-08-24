import { useState } from 'react';
import './App.css';
import Box from './components/box';

function App() {
  
   const[state,setState]=useState(Array(9).fill(null));
   const[isXTurn,setisxTurn]=useState(true);

   const checkWinner=()=>{
    const winnerlogic=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let winner of winnerlogic){
      const[a,b,c]=winner;
      if(state[a]!==null && state[a]===state[b]&&state[a]===state[c]){
        return state[a];
      }
    }

    return false;

   };

   const isWinner = checkWinner();

   const handlereset=()=>{
    setState(Array(9).fill(null));
   }

   const handleClick=(index)=>{
    const newState = [...state];
    newState[index]=isXTurn ? 'x' : '0';
    setState(newState);
    setisxTurn(!isXTurn);
   };

  return (
    <div className="App">
     
      <div className='board'>{
        isWinner ? (<>{isWinner} win the game  <button onClick={()=>handlereset()}>play Again</button></>):(
        <>
      <div className='box-row'>
      <Box onClick={()=>handleClick(0)} value={state[0]}/> 
      <Box onClick={()=>handleClick(1)} value={state[1]}/> 
      <Box onClick={()=>handleClick(2)} value={state[2]}/>
      </div>
      <div className='box-row'>
      <Box onClick={()=>handleClick(3)} value={state[3]}/> 
      <Box onClick={()=>handleClick(4)} value={state[4]}/> 
      <Box onClick={()=>handleClick(5)} value={state[5]}/>
      </div>
      <div className='box-row'>
      <Box onClick={()=>handleClick(6)} value={state[6]}/> 
      <Box onClick={()=>handleClick(7)} value={state[7]}/> 
      <Box onClick={()=>handleClick(8)} value={state[8]}/>
      </div>
      </>)}
      </div>
    </div>
  );
}

export default App;
