import React from 'react';
import { browserHistory } from 'react-router';

const Add = React.createClass({
  getInitialState: function() {
      return {
        title : "",
        rating: ""
      };
  },

  handleChange : function(field, event){
    var nextState = {};
    nextState[field] = event.target.value;

    this.setState(nextState);
  },

  handleSubmit : function(){
    var that = this;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", function(){
      var response = JSON.parse(this.response);

      browserHistory.push("/");
    });

    xmlhttp.open("POST", "/api");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
      name : this.state.title,
      rating: this.state.rating
    }))
  },

  render : function(){
    return (
      <div className="add">
        <h1>Add</h1>

        <div className="addContent">
        <p>Movie Title</p>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange.bind(this, "title")}
          />
        <p>Rating</p>
          <input
            type="integer"
            value={this.state.rating}
            onChange={this.handleChange.bind(this, "rating")}
          />
        <button onClick={this.handleSubmit}>Submit</button>
        <br/>
        </div>



      </div>
    )
  }
});

module.exports = Add;