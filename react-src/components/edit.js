import React from 'react';

const Edit = React.createClass({
  getInitialState : function(){
    return {
      id : this.props.params.id,
      title : "",
      rating : ""
    }
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
      console.log('this', this);
    });

    xmlhttp.open("PUT", "/api");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
      id : this.state.id,
      name : this.state.title,
      rating: this.state.rating
    }))
  },
  render : function(){
    return (
      <div className="Edit">
        <h1>Edit Movie Review</h1>
        <p>Old Title</p>
        <p>Old Rating</p>
        <p>New Title</p>
        <input
          value={this.state.title}
          onChange={this.handleChange.bind(this, "title")}
        />
        <p>New Rating</p>
        <input
          value={this.state.rating}
          onChange={this.handleChange.bind(this, "rating")}
        />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
});

module.exports = Edit;