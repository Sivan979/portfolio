import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Portfolio from './pages/portfolio.jsx';
import Resume from './pages/resume.jsx';


function App() {

  return (
    <div>
      <Router basename="/starss">
        <Routes>

          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
