import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const PagesRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default PagesRoutes;