var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');

var Movie = React.createClass({
    render: function() {
      return(
        <div className="well">
            <div className="row">
                <div className="col-md-4">
                    <h4>Poster</h4>
                    <img className="thumbnail" src={this.props.movie.Poster} />
                </div>
                <div className="col-md-8">
                    <h4>Title</h4>
                    <h4>Year</h4>
                    <h4>Type</h4>
                </div>
            </div>
        </div>
      )
    }
});

module.exports = Movie;
