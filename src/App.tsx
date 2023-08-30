import React from 'react';

import './App.css';
import {
  Route,
  BrowserRouter as Router, Routes
} from 'react-router-dom';
import Main from './routes/main/main';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes>
  </Router>
  );
}

export default App;