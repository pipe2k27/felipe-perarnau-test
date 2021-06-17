import React, { useEffect, useState } from 'react';
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
      <Route exact path="/">
        <Discover setCurrentMovieData={setCurrentMovieData} />
      </Route>
      <Route path="/movie">
        <Movie data={currentMovieData} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
