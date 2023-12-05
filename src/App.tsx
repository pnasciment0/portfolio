// src/App.tsx
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Panel from './components/Panel';
import ProjectTile from './components/ProjectTile';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import wtvLogo from './assets/wtvlogo.png';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
