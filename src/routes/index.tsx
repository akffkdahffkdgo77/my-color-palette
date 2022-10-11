import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Create from 'pages/Create';
import Home from 'pages/Home';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
