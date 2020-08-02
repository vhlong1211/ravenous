import React from 'react';
import './App.css';
import Business from '../Business/Business.js';
import SearchBar from '../SearchBar/SearchBar.js';
import BusinessList from '../BusinessList/BusinessList.js';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList /> 
      </div>
    )
  }
}

export default App;
