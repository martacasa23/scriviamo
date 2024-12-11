import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';
import Navbar from './components/navbar';
import StartNow from './components/StartNow';
import LearnMore from './components/LearnMore';
import PublishedStories from './components/PublishedStories';
import SubmitStory from './components/SubmitStory';  // Importa il componente per i dettagli della storia

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-now" element={<StartNow />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/published-stories" element={<PublishedStories />} />
          <Route path="/submit-story" element={<SubmitStory />} />      
          </Routes>
      </div>
    </Router>
  );
}

export default App;
