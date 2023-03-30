import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from './helpers/hooks/useGlobalContext';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SuccessPage from './pages/SuccessPage';

function App() {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/categories/:idc" element={<CategoryPage />} />
                    <Route path="/categories/:idc/products/:idp" element={<DetailsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/success" element={<SuccessPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
