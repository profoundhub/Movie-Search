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
                    <h4>Title: {this.props.movie.Title}</h4>
                    <ul className="list-group">
                        <li className="list-group-item"></li>
                            <h5>Year</h5>
                        <li className="list-group-item"></li>
                            <h5>Type</h5>
                        <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
                    </ul>
                </div>
            </div>
        </div>
      )
    }
});

module.exports = Movie;
