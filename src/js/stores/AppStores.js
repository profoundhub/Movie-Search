var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
      this.on('change', callback);
    },
    removeChangeListener: function(callback) {
      this.remove('change', callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
        case AppConstants.SEARCH_MOVIES:
            console.log('Searching for movie: '+ action.movie.title);
            AppStore.emit(CHANGE_EVENT);
            break;
        default:
        return movie.title;
    }

    return true;
});

module.exports = AppStore;
