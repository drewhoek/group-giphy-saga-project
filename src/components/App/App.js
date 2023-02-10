import React from 'react';
import GifList from '../GifList/GifList';
import FavoriteGif from '../FavoriteGif/FavoriteGif';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import './App.css';

function App(props) {
  return (

    <div className='app'>
      <header className='app-header'>
        <h1 className='app-title'>Giphy Galore!</h1>
      </header>
      <Router>
        <Route path='/' exact>
          <SearchForm />
          <GifList />
        </Route>
        < Route path='/favorites'>
          <FavoriteGif />
        </Route>
      </Router>
    </div>



  );
}

export default App;
