import {Link, Outlet} from 'react-router-dom';

export const App = () => {

    return (
        <div>
            <span>ROOT PAGE</span>
            <br />
            <Link to={'/about'}>2About</Link>
            <br />
            <Link to={'/shop'}>2Shop</Link>
            <Outlet />
        </div>
    )
}