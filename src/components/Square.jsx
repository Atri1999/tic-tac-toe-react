
function Square({symbol,handleClick,num}) {
  const onClick=()=>{
    handleClick(num)
  }
  return (
    <div className="square" onClick={()=>onClick()}>
        {symbol}
    </div>
  )
}

export default Square