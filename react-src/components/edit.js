import React from 'react';
import { browserHistory } from 'react-router';

const Edit = React.createClass({
  getInitialState : function(){
    return {
      id : this.props.params.id,
      title : "",
      rating : ""
    }
  },
  componentDidMount : function(){
    var that = this;

    var getReq = new XMLHttpRequest();
    getReq.addEventListener("load", function(){
      var result = JSON.parse(this.response).result;

      console.log('result', JSON.parse(this.response));

      that.setState({
        title : result[0].name,
        rating : result[0].rating
      })

    });
    getReq.open("GET", "/api/id/" + this.props.params.id);
    getReq.send();
  },
  handleChange : function(field, event){
    var nextState = {};
    nextState[field] = event.target.value;

    this.setState(nextState);
  },
  handleEdit : function(){
    var that = this;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", function(){
      if(JSON.parse(this.response).success === true){
        browserHistory.push("/");
      }
    });

    xmlhttp.open("PUT", "/api");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
      id : this.state.id,
      name : this.state.title,
      rating: this.state.rating
    }))
  },
  handleDelete : function(){
    var that = this;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.addEventListener("load", function(){
      if(JSON.parse(this.response).success === true){
        browserHistory.push("/");
      }
    });

    xmlhttp.open("DELETE", "/api");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
      id : this.state.id
    }))
  },
  render : function(){
    return (
      <div className="Edit">
        <h1>Edit Movie Review</h1>
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
        <button onClick={this.handleEdit}>
          Edit Review
        </button>
        <button onClick={this.handleDelete}>
          Delete Review
        </button>
      </div>
    )
  }
});

module.exports = Edit;