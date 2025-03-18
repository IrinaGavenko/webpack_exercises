import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// loading indication
import {Suspense} from 'react';

import {App} from './components/App';
import {Shop, About} from './pages';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root is missing');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: (
                    <Suspense fallback={"Loading..."}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: '/shop',
                element: (
                    <Suspense fallback={"Loading..."}>
                        <Shop />
                    </Suspense>
                )
            }
        ],
    },
])

container.render(
    <RouterProvider router={router} />
)