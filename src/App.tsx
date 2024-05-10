// src/App.tsx
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/resume" element={<ResumePage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
