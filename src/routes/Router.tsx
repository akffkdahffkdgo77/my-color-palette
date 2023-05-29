import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from 'features/Layout/BaseLayout';
import Create from 'pages/Create';
import Home from 'pages/Home';
import List from 'pages/List';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/create" element={<Create />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
