import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './styles/App.css';
import FileUpload from './components/FileUpload';
import Chat from './components/Chat';

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="nav-buttons">
        <Link to="/upload" className="nav-button">
          <button className={location.pathname === '/upload' ? 'active' : ''}>
            Upload Files
          </button>
        </Link>
        <Link to="/chat" className="nav-button">
          <button className={location.pathname === '/chat' ? 'active' : ''}>
            Chat
          </button>
        </Link>
      </div>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/upload" element={<FileUpload />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
