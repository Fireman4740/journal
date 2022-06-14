import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header.js'
import History from '../pages/History';
import Home from '../pages/Home';
import Stat from '../pages/Stat';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/history" element={<History />} />
		  <Route path="/statistic" element={<Stat />} />
          
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
