var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');

var Movie = React.createClass({
    render: function() {

        if (this.props.movie.Poster == '') {
            var moviePosterResults = '';
        } else {
            var moviePosterResults = "";
        }

        // console.log("1.", this.props.movie.Poster);
        // console.log("2.", this.movie.Poster);

        // 1 {this.props.movie.Poster}
        // 2 {this.movie.Poster}
var httpUrl = this.props.movie.Poster;
var httpsUrl = "https" + httpUrl.substring(4);

// {this.props.movie.Poster}
// to
// {httpsUrl}

// ie. https://ia.media-imdb.com/images/M/MV5BMTQxNTA1Njk3MF5BMl5BanBnXkFtZTcwMjI4NjUyMQ@@._V1_SX300.jpg
// vs 403:

// ie. 2: https://ia.media-imdb.com/images/M/MV5BODkxMDg0MjM2OF5BMl5BanBnXkFtZTcwMjc0NTU4MQ@@._V1_SX300.jpg
// vs 403: (req. refresh): https://ia.media-imdb.com/images/M/MV5BODkxMDg0MjM2OF5BMl5BanBnXkFtZTcwMjc0NTU4MQ@@._V1_SX300.jpg

      var link = 'https://www.imdb.com/title/' + this.props.movie.imdbID;
      return(
        <div className="well">
            <div className="row">
                <div className="col-md-5">
                    <h4>Poster</h4>
                    <img className="thumbnail" src={httpsUrl} />





                </div>
                <div className="col-md-7">
                    <h4><strong>{this.props.movie.Title}</strong></h4>
                    <ul className="list-group">
                        <li className="list-group-item"><h5>Year: {this.props.movie.Year}</h5></li>
                        <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
                    </ul>
                        <a className="btn btn-primary" href={link} target="_blank">View on IMDB</a>
                </div>
            </div>
        </div>
      )
    }
});

module.exports = Movie;
