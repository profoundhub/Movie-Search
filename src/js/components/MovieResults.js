var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');

var MovieResults = React.createClass({
    render: function() {
      return(
        <div>
            <h3 className="text=center">Movie Results</h3>
                {
                    this.props.movies.map(function(movie, index)
                        return(
                            
                        )
                    )
                }
        </div>
      )
    }
});

module.exports = MovieResults;
