var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');
var SearchForm = require('./SearchForm');
var Footer = require('./Footer');

function getAppState() {
    return {
        // getMovieResults : put movies into State!
        movies: AppStore.getMovieResults()
    }
}
var App = React.createClass({
    getInitialState: function() {
        return getAppState();
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnMount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function() {
        console.log(this.state.movies);
      return(
        <div>
            <SearchForm />
            <Footer />
        </div>
      )
    },

    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = App;
