import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";
import MainPage from './MainPage';
import GamePage from './GamePage';

export default function App() {

    return (
        <Router>
            <Routes>
                <Route
                    path="/misinfowb"
                    element={<MainPage />} />
                <Route
                    path="misinfowb/:id"
                    element={<GamePage />}
                />
            </Routes>
        </Router>

    );
};