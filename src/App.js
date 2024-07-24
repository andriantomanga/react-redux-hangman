import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hangman from './components/Hangman';
import CongratulationsPage from './components/CongratulationsPage';
import FailurePage from './components/FailurePage';

const App = () => {
    return (
      <Router basename="/react-redux-hangman">
        <Routes>
          <Route path="/" element={<Hangman />} />
          <Route path="/congratulations" element={<CongratulationsPage />} />
          <Route path="/failure" element={<FailurePage />} />
        </Routes>
      </Router>
    );
};

export default App;