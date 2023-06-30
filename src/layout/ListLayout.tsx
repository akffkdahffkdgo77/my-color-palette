import { Outlet } from 'react-router-dom';

import Aside from './Aside';

export default function ListLayout() {
    return (
        <>
            <Aside />
            <Outlet />
        </>
    );
}
