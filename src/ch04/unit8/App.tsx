import React, { useState, useRef } from 'react';

const App: React.FC = () => {
  const [hidden, setHidden] = useState(false)
  const sumRef = useRef(0)

   function clickHandler () {
    sumRef.current++
     console.log(sumRef.current)
     if(sumRef.current === 5){
      setHidden(true)
     } else if(sumRef.current >= 15){
      setHidden(false)
     }
   } 
  return <>
    <button onClick={clickHandler}>clickNum</button>
    {hidden && <p>被隱藏的區塊</p>}
  </>
}
export default App