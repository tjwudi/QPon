'use strict';

var React = require('react-native'),
  List = require('./List');

var {
  TextInput,
  View
} = React;

var styles = React.StyleSheet.create({

});

var Main = React.createClass({
  render: function() {
    return <List navigator={this.props.navigator}/>;
  }
});

module.exports = Main;