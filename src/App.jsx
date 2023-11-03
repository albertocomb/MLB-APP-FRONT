import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigator from '../components/navbar/navbar';
import Home from '../components/content/Home';
import News from '../components/content/News';
import Scores from '../components/content/Scores';
import Players from '../components/content/Players';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Scores" element={<Scores />} />
          <Route path="/Players" element={<Players />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
