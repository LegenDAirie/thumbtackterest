import React from 'react';
import Grid from './Grid'
import Header from './Header'
import './App.css';

const App = ({ assets }) => {

  return (
    <div>
      <Header/>
      <Grid assets={ assets }/>
    </div>
  )
}

export default App;
