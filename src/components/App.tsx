import {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';

import * as styles from './App.module.scss';


export const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1)

    return (
        <>
            <div className={styles.nav}>
            <Link to={'/about'}>about</Link>
            <Link to={'shop'}>shop</Link>
            </div>
            <div>{count}</div>
            <button className={styles.button} onClick={increment}>+</button>
            <Outlet />
        </>
    )
}