import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Discover from './screens/Discover';
import Movie from './screens/Movie';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  const [currentMovieData, setCurrentMovieData] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <div className="only-desktop">
        <Route exact path="/">
          <Discover setCurrentMovieData={setCurrentMovieData} />
        </Route>
        <Route path="/movie">
          <Movie data={currentMovieData} />
        </Route>
        <Footer />
      </div>
      <div className="only-mobile center">
        Please open the app on a desktop computer on full screen to continue!
      </div>
    </div>
  );
}

export default App;
