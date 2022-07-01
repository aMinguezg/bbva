import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import GamePage from './pages/gamePage'

function App() {
    return (
        <div className="App">
            <section className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="*" element={<HomePage />} />
                        <Route path="/game" element={<GamePage />} />
                    </Routes>
                </BrowserRouter>
            </section>
        </div>
    )
}

export default App
