import {Outlet,Link} from 'react-router-dom';

export const App = () => {

    return (
        <div>
            <span>SHOP PAGE</span>
            <Outlet />
        </div>
    )
}