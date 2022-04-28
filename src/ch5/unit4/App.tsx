import React, { useState, useEffect, useMemo, useCallback  } from 'react';

const B: React.FC = () => { 
    console.log('B render');
    return <div>B</div>
}

const App: React.FC = () => {
    console.log('App render');
    const [value, setvValue] = useState(false);
    return <>
        <h1>App</h1>
        <B />
        <button onClick={() => {setvValue(!value)}}>Rander</button>
    </>
}
export default App 