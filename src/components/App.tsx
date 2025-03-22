import {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';

import birdPng from '@/assets/png_bird.png';
import birdJpg from '@/assets/jpg_bird.jpg';
import CocktailSvg from '@/assets/cocktail.svg';
import IconSvg from '@/assets/icon.svg';

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

            <div className={styles.pictureRoot}>
                <img
                    src={birdPng}
                    alt="picture in png"
                    className={styles.picture}
                />

                <CocktailSvg className={styles.picture} />

                <img
                    src={birdJpg}
                    alt="picture in jpg"
                    className={styles.picture}
                />
            </div>

            {/** will brake CocktailSvg styles! **/}
            <IconSvg width={20} height={20} className={styles.icon} />
            <div>{count}</div>
            <button className={styles.button} onClick={increment}>+</button>
            <Outlet />
        </>
    )
}