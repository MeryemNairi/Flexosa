import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import FileUpload from '../components/FileUpload';
import Chat from '../components/Chat';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          {/* Routes are now wrapping the components */}
          <Routes>
            {/* Default route: Home */}
            <Route path="/" element={<Home />} />
            
            {/* Other routes */}
            <Route path="/file-upload" element={<FileUpload />} /> {/* FileUpload route */}
            <Route path="/chat" element={<Chat />} /> {/* Chat route */}
          </Routes>

          {/* These components will always be rendered */}
          <Chat />
          <FileUpload />
        </main>
      </div>
    </Router>
  );
}

export default App;
