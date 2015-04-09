'use strict';

var React = require('react-native'),
  List = require('./List');

var {
  NavigatorIOS
} = React;

var styles = React.StyleSheet.create({
  navigator: {
    flex: 1
  },
  wrapper: {
    backgroundColor: 'white'
  }
});

var App = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: List,
          title: '发现'
        }}
        itemWrapperStyle={styles.wrapper}
        style={styles.navigator}
      />
    );
  }
});

module.exports = App;