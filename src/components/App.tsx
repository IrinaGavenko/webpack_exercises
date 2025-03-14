import {useState} from 'react';

export const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1)

    return (
        <>
            <div>{count}</div>
            <button onClick={increment}>+</button>
        </>
    )
}