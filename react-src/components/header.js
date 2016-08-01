import React from 'react';

const Header = React.createClass({
  render : function(){
    return (
      <div className="header">
        <h1>Movie Review App</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Header;