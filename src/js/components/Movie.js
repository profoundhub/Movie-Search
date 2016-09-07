var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');

var Movie = React.createClass({
    render: function() {
      var link = 'http://www.imdb.com/title/' + this.props.movie.imdbID;
      return(
        <div className="well">
            <div className="row">
                <div className="col-md-5">
                    <h4>Poster</h4>
                    <img className="thumbnail" src={this.props.movie.Poster} />
                </div>
                <div className="col-md-7">
                    <h4>Title: {this.props.movie.Title}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">{this.props.movie.Type}</li>
                            <h5>Year</h5>
                        <li className="list-group-item">{this.props.movie.Year}</li>
                            <h5>Type</h5>
                        <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
                    </ul>
                    <a className="btn btn-primary" href={link}>View {this.props.movie.Title} on IMDB</a>
                </div>
            </div>
        </div>
      )
    }
});

module.exports = Movie;
