var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../dispatcher/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('./utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStores = assign({}, EventEmitter.prototype, {
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
