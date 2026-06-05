
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from './components/Business';
import StarBuzz from './components/StarBuzz';
import Sports from './components/Sports';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      searchText:""
    }
  }
    handleSearch=(text)=>{
      this.setState({searchText:text})
    }
  render() {
    return (
      <div>
        <BrowserRouter>
  <Navbar handleSearch={this.handleSearch} />

  <Routes>
    <Route
      path="/"
      element={<News searchText={this.state.searchText} />}
    />

    <Route path="/sports" 
    element={<Sports />} />

    <Route
      path="/business"
      element={<Business />}
    />

    <Route
      path="/StarBuzz"
      element={<StarBuzz />}
    />
  </Routes>
</BrowserRouter>
      </div>
    )
  }
}

