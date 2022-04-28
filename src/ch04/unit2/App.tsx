import React, { useState } from 'react';
import styled from 'styled-components';



// 1. // TEST
// const App: React.FC = () => {
//   const [counter, setCounter] = useState<number | null>(0)
//   function counterHandler () {
//     if(counter !== null){
//       setCounter(counter + 1)
//     }
//   }
  
//   return <>
//       <p>Cunter: {counter}</p>
//       <button onClick={counterHandler}>+1</button>
//   </>
// }
// export default App


// 2.
// type ChildProps = { 
//   Recount: number
// }
// const Parent: React.FC = () => { 
//   let [count, setCount] = useState(0)
//   return (
//     <div onClick={() => setCount(prev => prev + 1)}>
//       Parent clicked {count} times
//       <Child Recount={count}/>
//     </div>
//   )
// }

// const Child: React.FC<ChildProps> = ({Recount}) => { 
//   return (
//     <button>
//       Child clicked {Recount} times
//     </button>
//   )
// }

// export default Parent


// 3.
const Counter: React.FC = () => { 
  const [counter, setCounter] = useState(0)

  const handleClick = () => { 
    function cb (prev: number) {
      return prev + 3
    }
    setCounter(cb)
    setCounter(cb)
  }
  return (
    <>
      <h1>Counter 組件</h1>
      <div>
        counter: {counter}
      </div>
      <br/>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}
export default Counter