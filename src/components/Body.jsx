import { useState,useEffect } from "react"
import Square from "./Square"

function Body() {
    const [symbol,setsymbol]=useState('x')
    const [squares,setSquares]=useState(Array(9).fill(''))
    const [winner,setwinner]=useState('')

    
    
    

    const handleClick=(num)=>{
        if(squares[num]===''){
            let squa=[...squares]
            squa[num]=symbol
            //console.log(squa)
            setSquares(squa)
            if(symbol==='x'){
                setsymbol('o')
            }else{
                setsymbol('x')
            }
        }      
    }

    const checkWinner=()=>{
        const winMatch=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        
    
        for (let match of winMatch){
            
            if((squares[match[0]]==='x' || squares[match[0]]==='o') && squares[match[0]]===squares[match[1]] && squares[match[0]]===squares[match[2]]){
                setwinner(squares[match[0]])
            }
        }
    }
    
    useEffect(()=>{ 
        checkWinner()
    },[squares,symbol])

    

  return (
    <div className='content'>
        <div className="score">Winner:{winner}</div>
        <div className='board'>
            <Square  symbol={squares[0]} handleClick={handleClick} num={0}/>
            <Square  symbol={squares[1]} handleClick={handleClick} num={1}/>
            <Square  symbol={squares[2]} handleClick={handleClick} num={2}/>
            <Square  symbol={squares[3]} handleClick={handleClick} num={3}/>
            <Square  symbol={squares[4]} handleClick={handleClick} num={4}/>
            <Square  symbol={squares[5]} handleClick={handleClick} num={5}/>
            <Square  symbol={squares[6]} handleClick={handleClick} num={6}/>
            <Square  symbol={squares[7]} handleClick={handleClick} num={7}/>
            <Square  symbol={squares[8]} handleClick={handleClick} num={8}/>
            
        </div>
    </div>
  )
}

export default Body