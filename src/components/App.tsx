import {useState} from 'react';

import * as styles from './App.module.scss';

export const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1)

    return (
        <>
            <div>{count}</div>
            <button className={styles.button} onClick={increment}>+</button>
        </>
    )
}