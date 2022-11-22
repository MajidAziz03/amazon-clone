import './App.css';
import { Fragment } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom'
import Checkout from './Components/Checkout';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <Fragment>
            < Header />
            < Home />
          </Fragment>
        } />
        <Route exact path='/checkout' element={ 
          <Fragment>
            <Header />
            <Checkout />
          </Fragment>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;
