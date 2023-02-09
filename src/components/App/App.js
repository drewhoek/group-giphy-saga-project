import React from 'react';
import GifList from '../GifList/GifList';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Router>

        {/* <Route path="/giflist">
       
        </Route> */}

        <Route path='/form'>
          <SearchForm />
          <GifList />
        </Route>

      </Router>
    </div>



  );
}

export default App;
