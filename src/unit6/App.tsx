import React, { useState } from 'react';
import styled from 'styled-components';

type BtnStatus = { BtnStatus: boolean }

const Button = styled.button<BtnStatus>`
    width: 100px;
    font-weight: bold;
    height: 40px;
    background-color: #d7b272;
    color: ${props => props.BtnStatus === false ? '#fff' : '#337a3a'};
    border-radius: 5px;
    padding: 5px;
    border: none;
    cursor: pointer;
`

const AppStyle1 = {
    color: 'pink'
}
const AppStyle2 = {
    color: 'green'
}
const App: React.FC = () => {
    const [status, setStatus] = useState(true)
    const clickBtn = () => { 
        setStatus(!status)
    }

    return <>
        <h1 style={status ? AppStyle1 : AppStyle2}>Yooni</h1>
        <Button BtnStatus={status} onClick={() => {setStatus(!status)}}>Yooni</Button>
    </>
}
export default App