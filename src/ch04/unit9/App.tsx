import React, { useState, useRef, useEffect } from 'react';



const App: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    // const element = document.getElementById('h1') //如果引用套件的話可以使用這個方式抓取html元素
    // console.log(element)
    console.log('h1Ref', h1Ref.current)
  },[])
  return <>
    {/* <h1 id="h1"></h1> */}
    <h1 ref={h1Ref}>Ref</h1>
  </>
}
export default App