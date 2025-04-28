import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";
import MainPage from './MainPage';
import GamePage from './GamePage'
import Footer from './Footer';

export default function App() {

    return (
        <Router>
            <body>
                <main>
                    <Routes>
                        <Route
                            path="/misinfowb"
                            element={<MainPage />} />
                        <Route
                            path="misinfowb/:id"
                            element={<GamePage />}
                        />
                    </Routes>
                </main>
            </body>
            <Footer />
        </Router>

    );
};