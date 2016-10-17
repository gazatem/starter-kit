import React, { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import './app.css';

class App extends Component {
    render() {
      return (
        <div className="container">
          <Header/>
          <div className="appContent">
            {this.props.children}
          </div>
          <Footer/>
        </div>
      );
    }
}

export default App;
