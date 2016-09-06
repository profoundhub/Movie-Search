var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');

var SearchForm = React.createClass({
    render: function() {
      return(
        <div className="search-form">
            <h1 className="text-center">Search For A Movie</h1>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" ref="title" placeholder="Enter A Movie Title ..." />
                </div>
                <button className="btn btn-primary btn-block">Search Movie</button>
            </form>
        </div>
      )
    }
});

module.exports = SearchForm;
