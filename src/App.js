import './App.css';
import { Fragment } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
   Link
} from 'react-router-dom'
import Checkout from './Components/Checkout';
import Login from './Components/Login';



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
        <Route exact path='/login' element={<Login /> } />
      </Routes>
    </Router>
  );
}

export default App;
