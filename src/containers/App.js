import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
    render() {
      return (
        <div className="container">
          <Header/>
          <div className="container appContent">
            {this.props.children}
          </div>
          <Footer/>
        </div>
      );
    }
}

export default App;
