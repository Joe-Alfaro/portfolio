import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

const AppWrapper = styled.div`
  background: grey;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Navigation />
        <Header />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
