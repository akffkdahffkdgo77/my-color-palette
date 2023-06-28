import { Outlet } from 'react-router-dom';

import Header from 'features/Layout/Header';
import Menu from 'features/Layout/Menu';

export default function BaseLayout() {
    return (
        <div className="relative w-full bg-[#121212]">
            <Header />
            <Menu />
            <main className="mt-[81px] w-full bg-[#121212] [min-height:calc(100vh-81px)]">
                <Outlet />
            </main>
        </div>
    );
}
