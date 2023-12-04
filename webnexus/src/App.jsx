import './App.css'
import Home from './pages/Home/Home'
import UserPage from './pages/UserPage/UserPage'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
