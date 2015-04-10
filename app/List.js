'use strict';

var React = require('react-native'),
  url = require('url'),
  config = require('./config'),
  ListItem = require('./ListItem');

var {
  ListView,
  Text,
  ScrollView,
  ActivityIndicatorIOS,
  activityIndicator
} = React

var styles = React.StyleSheet.create({
  activityIndicator: {
    marginTop: 10
  }
});

var List = React.createClass({
  getInitialState: function() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1._id !== r2._id
    });
    return {
      dataSource: dataSource.cloneWithRows([])
    }
  },
  fetchData: function() {
    fetch(url.resolve(config.SERVER_BASE, 'coupons'))
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data)
        });
      });
  },
  componentDidMount: function() {
    this.fetchData();
  },
  render: function() {
    if (this.state.dataSource.getRowCount() > 0) {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListItem navigator={this.props.navigator} coupon={rowData}/>} 
        />
      );
    }
    else {
      return (
        <ScrollView>
          <ActivityIndicatorIOS
            animating={true}
            size="large"
            style={styles.activityIndicator}
          />
        </ScrollView>
      );
    }
  }
});

module.exports = List;