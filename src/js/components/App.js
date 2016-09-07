var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');
var SearchForm = require('./SearchForm');
var Footer = require('./Footer');

function getAppState() {
    return {
        // getMovieResults
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
