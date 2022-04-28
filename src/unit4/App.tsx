import React, { useState } from 'react';
type BtnProps = {
    currentNum: number;
    onClickHandler: () => void;  //void用於function的回傳值定義，代表這個function不會回傳任何值
}
const Btn: React.FC<BtnProps> = ({ currentNum, onClickHandler }) => {
    
    return (
        <button onClick={ onClickHandler }>
            Add | 
            <span> 目前的總數 { currentNum }</span>
        </button>
        
        )
}

const App: React.FC = () => {
    const [num, setNum] = useState(0)
    function btnClickHandler(){
        setNum(num + 1)
    }
    return <>
        <p className='mainColor'>計數器: { num }</p>
        <Btn currentNum={num} onClickHandler={btnClickHandler}/>
    </>
}
export default App