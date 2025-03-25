import {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';

import birdPng from '@/assets/png_bird.png';
import birdJpg from '@/assets/jpg_bird.jpg';
import CocktailSvg from '@/assets/cocktail.svg';
import IconSvg from '@/assets/icon.svg';

import * as styles from './App.module.scss';


export const App = () => {
    const testTS = (a: number): number  => a + 5;

    const [count, setCount] = useState(0);
    const increment = () => setCount(prev => prev + 1)

    // check build -- in diffrent env.build only one branch exists
    let platformTitle;
    if (__PLATFORM__ === 'desktop') {
        platformTitle = <div>IS DESKTOP</div>
    }
    if (__PLATFORM__ === 'mobile') {
        platformTitle = <div>IS MOBILE</div>
    }

    // it has type error, however start still works
    // in dev mode ForkTsCheckerWebpackPlugin will show an error
    // testTS("5")

    return (
        <>
            <h1>PLATFORM {platformTitle}</h1>

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