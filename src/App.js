import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VanueNFo from "./components/vanueNFo"
import Highlights from './components/Highlights'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px'}}>
        <Header/>
        <Featured/>
        <VanueNFo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
