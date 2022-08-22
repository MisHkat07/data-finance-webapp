import React from 'react';
import Analytics from './components/Analytics';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Analytics/>
    </div>
  );
}

export default App;
