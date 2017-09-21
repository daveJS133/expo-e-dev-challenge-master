var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;



var root = React.createClass({
  render: function() {
    return (
      <div id="supplier-box"></div>
      <div id="product-box"></div>
    );
  }
});

ReactDOM.render(
  (
    <Router>
     
    </Router>
  ),
  document.getElementById('main')
);