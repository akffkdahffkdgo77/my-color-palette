import { HashRouter, Route, Routes } from 'react-router-dom';

import Create from 'pages/Create';
import Home from 'pages/Home';

function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </HashRouter>
    );
}
export default Router;
