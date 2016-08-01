import React from 'react';
import { browserHistory } from 'react-router';

const GetAll = React.createClass({
  getInitialState : function(){
    return {
      reviews : []
    }
  },
  componentDidMount : function(){
    var that = this;

    var getReq = new XMLHttpRequest();
    getReq.addEventListener("load", function(){
      that.setState({
        reviews : JSON.parse(this.response).data
      })
    });
    getReq.open("GET", "/api");
    getReq.send();
  },
  redirect : function(id){
    browserHistory.push("/edit/" + id)
  },
  render : function(){
    var that = this;

    var reviews = this.state.reviews.map(function(element){
      return (
        <div key={element.id}>
          <p>{element.name}</p>
          <p>{element.rating}</p>
          <button onClick={that.redirect.bind(that, element.id)}>Edit</button>
        </div>
      )
    })

    return (
      <div className="getall">
        <h1>All Reviews</h1>
        {reviews}
      </div>
    )
  }
});

module.exports = GetAll;