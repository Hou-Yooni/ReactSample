import React, { useState } from 'react';

const App: React.FC = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  function login(){
    // const account = document.getElementById('account') as HTMLInputElement
    // const password = document.getElementById('password') as HTMLInputElement
    console.log(account, password)
  }
    
  function onChangeHandler(event: React.FormEvent<HTMLInputElement>){
    if(event.currentTarget){
      // console.log(event.currentTarget.value)
      setAccount(event.currentTarget.value)
    }
  }
  function onChangePasswordHandler(event: React.FormEvent<HTMLInputElement>){
    if(event.currentTarget){
      // console.log(event.currentTarget.value)
      setPassword(event.currentTarget.value)
    }
  }
  return <>
      <h1>Form</h1>
      <p>Account</p>
      <input type="text" id="account" value={account} onChange={onChangeHandler}/>
      <p>你輸入的帳號: {account}</p>
      <p>Password</p>
      <input type="text" id="password" value={password} onChange={onChangePasswordHandler}/>
      <div>
        <button onClick={login}>SING IN</button>
      </div>
  </>
}
export default App