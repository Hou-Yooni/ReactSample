import React, { useState  } from 'react';
type Props = {
    btnVisable: boolean
}
const B: React.FC<Props> = ({btnVisable}) => { 
    return <p>B<C btnVisable={btnVisable}/></p>
}
const C: React.FC<Props> = ({btnVisable}) => { 
    return <p>C<D btnVisable={btnVisable}/></p>
}
const D: React.FC<Props> = ({btnVisable}) => { 
    return <button>D</button>
}
const App: React.FC = () => {
    const [btnVisable, setBtnVisable] = useState(false);
    return <>
        <B btnVisable={btnVisable}/>
    </>
}
export default App 