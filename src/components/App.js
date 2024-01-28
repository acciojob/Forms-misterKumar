import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" id="form-link">
                Section 1
              </Link>
            </li>
            <li>
              <Link to="/section2" id="form-ref-link">
                Section 2
              </Link>
            </li>
            <li>
              <Link to="/section3" id="form-state-link">
                Section 3
              </Link>
            </li>
          </ul>
        </nav>

        <Routes> 
          <Route path="/" element={<Section1 />} /> 
          <Route path="/section2" element={<Section2 />} /> 
          <Route path="/section3" element={<Section3 />} /> 
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
