'use strict';

var React = require('react-native');

var {
  Text,
  View
} = React;

var ListItem = React.createClass({
  render: function() {
    return (
      <View>
        <Text>{this.props.coupon.title}</Text>
      </View>
    );
  }
});

module.exports = ListItem;