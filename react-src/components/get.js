import React from 'react';
import { browserHistory } from 'react-router';

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
      that.setState({
        results : JSON.parse(this.response).results
      })
    });
    getReq.open("GET", "/api/" + event.target.value);
    getReq.send();
  },

  redirect : function(id){
    browserHistory.push("/edit/" + id);

  },
  render : function(){
    var results = null;
    var that = this;

    if(this.state.results && this.state.results.length > 0){
      results = this.state.results.map(function(element){
        return (
          <div key={element.id}>
            <p>{element.name}</p>
            <p>{element.rating}</p>
           <button onClick={that.redirect.bind(that, element.id)}>Edit Review</button>
          </div>
        )
      })
    }

    return (
      <div className="get">
        <h1>Review Search</h1>
        <p>Search movie by name</p>
        <input
          value={this.state.query}
          onChange={this.handleChange}
        />
        {results}
      </div>
    )
  }
});

module.exports = Get;