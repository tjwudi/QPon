'use strict';

var React = require('react-native'),
  List = require('./List');

var {
  TextInput,
  View,
  ScrollView
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  list: {
    flex: 1,
  },
  searchInput: {
    backgroundColor: '#C7CBD3',
    height: 48,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

var Main = React.createClass({
  _searchCoupon: function(e) {
    var keyword = e.nativeEvent.text;
    if (keyword.length > 0) {
      this.refs.list.search(e.nativeEvent.text);
    }
    else {
      this.refs.list.fetchData();
    }
  },
  render: function() {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.searchInput} 
          keyboardType='default'
          placeholder='Search coupons'
          returnKeyType='search'
          onSubmitEditing={this._searchCoupon}
        />
        <List
          ref='list'
          style={styles.list} 
          navigator={this.props.navigator}/>
      </ScrollView>
    );
  }
});

module.exports = Main;