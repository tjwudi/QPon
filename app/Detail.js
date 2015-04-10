'use strict';

var React = require('react-native');

var {
  ScrollView,
  Text
} = React;

var Detail = React.createClass({
  render: function() {
    return <ScrollView><Text>Hello</Text></ScrollView>
  }
});

module.exports = Detail;