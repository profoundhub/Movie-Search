var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');
var SearchForm = require('./SearchForm.js');

var App = React.createClass({
    render: function() {
      return(
        <div>
            <SearchForm />
        </div>
      )
    }
});

module.exports = App;
