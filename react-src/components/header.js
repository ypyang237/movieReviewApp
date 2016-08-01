import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render : function(){
    return (
      <div className="header">
        <h1>Movie Review App</h1>
        <Link to="/">Get All Reviews</Link>
        <Link to="/get">Search Reviews</Link>
        <Link to="/add">Add a Review</Link>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Header;