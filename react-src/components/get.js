import React from 'react';

const Get = React.createClass({
  getInitialState : function(){
    return {
      query : "",
      results : []
    }
  },
  handleChange : function(event){
    this.setState({
      query : event.target.value
    })

    var that = this;

    var getReq = new XMLHttpRequest();
    getReq.addEventListener("load", function(){
      console.log('this', this);

      // that.setState({
      //   results : JSON.parse(this.response).results
      // })
    });
    getReq.open("GET", "/api/" + event.target.value);
    getReq.send();
  },
  render : function(){
    return (
      <div className="get">
        <h1>Get</h1>
        <p>Search movie by name</p>
        <input
          value={this.state.query}
          onChange={this.handleChange}
        />
      </div>
    )
  }
});

module.exports = Get;