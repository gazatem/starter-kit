import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.css';

export default class Header extends Component {
      render() {
          return(
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>

                      <Link to={`/` } className="navbar-brand"><strong>Home</strong></Link>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">


                      </ul>
                      <form className="navbar-form navbar-right">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Search"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                      </form>
                      <ul className="nav navbar-nav navbar-right">
                        <li><Link to={`/movies` }><strong>Movies</strong></Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
          );
      }
}
