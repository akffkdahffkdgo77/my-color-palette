import { Outlet } from 'react-router-dom';

import Header from 'features/Layout/Header';
import Menu from 'features/Layout/Menu';

export default function BaseLayout() {
    return (
        <div className="w-full relative bg-[#121212]">
            <Header />
            <Menu />
            <main className="w-full [min-height:calc(100vh-81px)] mt-[81px] bg-[#121212]">
                <Outlet />
            </main>
        </div>
    );
}
