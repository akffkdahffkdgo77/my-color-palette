import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/pages/Error';
import { BaseLayout, ListLayout } from '@layout';
import Create from '@pages/Create';
import Home from '@pages/Home';
import List from '@pages/List';

const router = createBrowserRouter([
    {
        path: '',
        element: <BaseLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'list',
                element: <ListLayout />,
                children: [
                    {
                        path: '',
                        element: <List />
                    }
                ]
            },
            {
                path: 'create',
                element: <Create />
            }
        ]
    }
]);

export default router;
