import {createBrowserRouter, Link} from 'react-router-dom';

import {App} from "@/components/App";
import {Suspense} from "react";
import {Shop} from "@/pages";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/main',
                element: (
                    <Suspense fallback={"Loading..."}>
                        <Shop />
                    </Suspense>
                )
            }, {
                path: '/shop',
                element: (
                    <Suspense fallback={"Loading..."}>
                        <div>
                            <Link to={'/main'}>2_Main</Link>
                        </div>
                    </Suspense>
                )
            }
        ],
    },
];

export const router = createBrowserRouter(routes);
export default routes;