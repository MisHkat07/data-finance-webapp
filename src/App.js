import React from 'react';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Prices from './components/Prices';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Analytics />
      <Newsletter />
      <Prices/>
      <Footer/>
    </div>
  );
}

export default App;
