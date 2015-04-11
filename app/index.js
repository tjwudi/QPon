'use strict';

var React = require('react-native'),
  Main = require('./Main');

var {
  NavigatorIOS
} = React;

var styles = React.StyleSheet.create({
  navigator: {
    flex: 1
  },
  wrapper: {
    backgroundColor: 'white',
    flexDirection: 'column'
  }
});

var App = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: '发现'
        }}
        itemWrapperStyle={styles.wrapper}
        style={styles.navigator}
      />
    );
  }
});

module.exports = App;