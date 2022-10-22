import React, { Component } from 'react';
import './App.css';
import Products from './components/products/Products.js';
//import Rating from './components/ratings/Rating.js';

class App extends Component {

  render() {
    return (
      <div>
          <Products/>
      </div>
    );
  }
}

export default App;
