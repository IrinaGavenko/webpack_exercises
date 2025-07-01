import {Outlet} from 'react-router-dom';

export const App = () => {

    return (
        <div>
            <span>ADMIN PAGE</span>
            <Outlet />
        </div>
    )
}