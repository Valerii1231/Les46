"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    coffee: 0,
    sugar: 0,
    user: '',
    isLoggedIn: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'incrementCoffee') {
    return {
      coffee: state.coffee + 1,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
      user: state.user
    };
  }

  if (action.type === 'decrementCoffee') {
    return {
      coffee: state.coffee - 1,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
      user: state.user
    };
  }

  if (action.type === 'increaseCoffee') {
    return {
      coffee: state.coffee + action.number,
      sugar: state.sugar,
      isLoggedIn: state.isLoggedIn,
      user: state.user
    };
  }

  if (action.type === 'incrementSugar') {
    return {
      sugar: state.sugar + 1,
      coffee: state.coffee,
      isLoggedIn: state.isLoggedIn,
      user: state.user
    };
  }

  if (action.type === 'decrementSugar') {
    return {
      sugar: state.sugar - 1,
      coffee: state.coffee,
      isLoggedIn: state.isLoggedIn,
      user: state.user
    };
  }

  if (action.type === 'increaseSugar') {
    return {
      sugar: state.sugar + action.number,
      coffee: state.coffee,
      isLoggedIn: state.isLoggedIn,
      user: state.user
    };
  }

  if (action.type === 'logIn') {
    return _objectSpread({}, state, {
      isLoggedIn: true
    });
  }

  if (action.type === 'logOut') {
    return _objectSpread({}, state, {
      isLoggedIn: false
    });
  }

  if (action.type === 'save') {
    var coffee = state.coffee,
        sugar = state.sugar;
    localStorage.setItem('coffee', coffee);
    localStorage.setItem('sugar', sugar);
    return _objectSpread({}, state, {
      isLoggedIn: true
    });
  }

  if (action.type === 'clear') {
    localStorage.clear();
    return _objectSpread({}, state, {
      isLoggedIn: true
    });
  }

  return state;
};

var store = (0, _redux.legacy_createStore)(counterReducer);
var _default = store;
exports["default"] = _default;