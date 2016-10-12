import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './header.css';

export default class Header extends Component {
      render() {
          return(
              <div className="pos-f-t">
                <div className="collapse" id="navbar-header">
                  <div className="container bg-inverse p-a-1" />
                </div>
                <nav className="navbar navbar-light bg-faded navbar-fixed-top">
                  <div className="container">
                    <button type="button" className="navbar-toggle pull-xs-left hidden-sm-up" data-toggle="collapse" data-target="#collapsingNavbar">&#9776;</button>

                    <div id="collapsingNavbar" className="collapse navbar-toggleable-xs">
                       <IndexLink to="/" className="navbar-brand">
                        <div title="Home" className="brand"/>
                        Home
                      </IndexLink>
                      <ul className="nav navbar-nav">

                      </ul>

                      <ul className="nav navbar-nav pull-xs-right">
                          <li title="Github Users with over 1000 Followers" className='nav-item active'><Link className="nav-link" to="/movies">Movies</Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
          );
      }
}
